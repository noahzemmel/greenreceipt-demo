const fetch = require('node-fetch');

const API_BASE = 'http://localhost:3001/api';

async function testDemo() {
    console.log('🌱 GreenReceipt Demo Test\n');

    try {
        // 1. Check API health
        console.log('1. Checking API health...');
        const healthResponse = await fetch('http://localhost:3001/health');
        const healthData = await healthResponse.json();
        console.log('✅ API is running:', healthData.status);

        // 2. Get merchants
        console.log('\n2. Loading merchants...');
        const merchantsResponse = await fetch(`${API_BASE}/v1/merchants`);
        const merchants = await merchantsResponse.json();
        console.log('✅ Found merchants:', merchants.map(m => m.name).join(', '));

        // 3. Create a receipt
        console.log('\n3. Creating a receipt...');
        const receiptData = {
            merchantId: merchants[0].id,
            subtotal: 1500, // £15.00 in pence
            tax: 300,      // £3.00 in pence
            total: 1800,   // £18.00 in pence
            currency: 'GBP',
            paymentMethod: 'card',
            category: 'Grocery',
            items: [
                {
                    name: 'Organic Bananas',
                    sku: 'TESCO-BANANA-ORG',
                    quantity: 6,
                    unitPrice: 20, // £0.20 in pence
                    total: 120,    // £1.20 in pence
                    category: 'Fruit'
                },
                {
                    name: 'Wholemeal Bread',
                    sku: 'TESCO-BREAD-WHOLE',
                    quantity: 1,
                    unitPrice: 120, // £1.20 in pence
                    total: 120,     // £1.20 in pence
                    category: 'Bakery'
                }
            ]
        };

        const receiptResponse = await fetch(`${API_BASE}/v1/retailer/receipts/draft`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(receiptData)
        });

        if (!receiptResponse.ok) {
            throw new Error(`Failed to create receipt: ${receiptResponse.statusText}`);
        }

        const receipt = await receiptResponse.json();
        console.log('✅ Receipt created successfully!');
        console.log('   Receipt ID:', receipt.rid);
        console.log('   QR Data:', receipt.qrData);
        console.log('   Deep Link:', receipt.deepLink);

        // 4. Test QR code data
        console.log('\n4. QR Code Information:');
        const qrPayload = JSON.parse(receipt.qrData);
        console.log('   Version:', qrPayload.ver);
        console.log('   Receipt ID:', qrPayload.rid);
        console.log('   Merchant ID:', qrPayload.m);
        console.log('   Nonce:', qrPayload.n);
        console.log('   Expires:', new Date(qrPayload.exp * 1000).toLocaleString());
        console.log('   Signature:', qrPayload.sig.substring(0, 20) + '...');

        // 5. Test authentication
        console.log('\n5. Testing authentication...');
        const authResponse = await fetch(`${API_BASE}/v1/auth/anonymous`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ deviceId: 'demo-device-123' })
        });

        if (authResponse.ok) {
            const authData = await authResponse.json();
            console.log('✅ Authentication successful!');
            console.log('   Device ID:', authData.deviceId);
            console.log('   Access Token:', authData.accessToken.substring(0, 20) + '...');

            // 6. Test claiming the receipt
            console.log('\n6. Testing receipt claiming...');
            const claimResponse = await fetch(`${API_BASE}/v1/receipts/claim`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authData.accessToken}`
                },
                body: JSON.stringify({ payload: qrPayload })
            });

            if (claimResponse.ok) {
                const claimedReceipt = await claimResponse.json();
                console.log('✅ Receipt claimed successfully!');
                console.log('   Merchant:', claimedReceipt.merchant.name);
                console.log('   Total:', `£${(claimedReceipt.total / 100).toFixed(2)}`);
                console.log('   Items:', claimedReceipt.items.length);
            } else {
                console.log('❌ Failed to claim receipt:', claimResponse.statusText);
            }

            // 7. Test getting receipts
            console.log('\n7. Testing receipt retrieval...');
            const receiptsResponse = await fetch(`${API_BASE}/v1/receipts`, {
                headers: { 'Authorization': `Bearer ${authData.accessToken}` }
            });

            if (receiptsResponse.ok) {
                const receiptsData = await receiptsResponse.json();
                console.log('✅ Retrieved receipts successfully!');
                console.log('   Total receipts:', receiptsData.receipts.length);
                console.log('   Pagination:', receiptsData.pagination);
            } else {
                console.log('❌ Failed to retrieve receipts:', receiptsResponse.statusText);
            }

            // 8. Test getting stats
            console.log('\n8. Testing analytics...');
            const statsResponse = await fetch(`${API_BASE}/v1/stats/overview`, {
                headers: { 'Authorization': `Bearer ${authData.accessToken}` }
            });

            if (statsResponse.ok) {
                const statsData = await statsResponse.json();
                console.log('✅ Retrieved stats successfully!');
                console.log('   Period:', statsData.period.from, 'to', statsData.period.to);
                console.log('   Monthly totals:', statsData.totalsByMonth.length, 'months');
                console.log('   Categories:', statsData.byCategory.length, 'categories');
                console.log('   Top merchants:', statsData.topMerchants.length, 'merchants');
                console.log('   Average basket:', `£${(statsData.averageBasket / 100).toFixed(2)}`);
            } else {
                console.log('❌ Failed to retrieve stats:', statsResponse.statusText);
            }

        } else {
            console.log('❌ Authentication failed:', authResponse.statusText);
        }

        console.log('\n🎉 Demo completed successfully!');
        console.log('\n📱 Next steps:');
        console.log('   1. Open http://localhost:8080/demo.html in your browser');
        console.log('   2. Create receipts using the web interface');
        console.log('   3. Generate QR codes for customers to scan');
        console.log('   4. Test the complete anonymous receipt flow');

    } catch (error) {
        console.error('❌ Demo failed:', error.message);
    }
}

testDemo();
