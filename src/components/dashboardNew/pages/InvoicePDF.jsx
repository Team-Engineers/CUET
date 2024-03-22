import { Document, Font, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';


Font.register({
    family: 'MyFont',
    fonts: [
        { fontWeight: 'normal', fontStyle: 'normal' },
    ],
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    section: {
        border: 1,
        borderColor: '#000000',
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    header: {
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 23,
        fontWeight: "bold",
        color: '#000000',
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    address: {
        fontSize: 14,
        color: '#5b5b5b',
        marginBottom: 8,
        marginTop: -10,
    },
    tableContainer: {
        marginTop: 20,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        alignItems: 'center',
        height: 40,
        textAlign: 'center',
    },
    tableRow2: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        textAlign: 'center',
    },
    tableHeader: {
        backgroundColor: '#f2f2f2',
        fontWeight: 'bold',
    },
    tableCell: {
        flex: 1,
        padding: 3,
    },
    tableCell2: {
        flex: 1,
        padding: 3,
    },
    boldText: {
        fontSize: "12px",
        fontWeight: 'bold',
    },
});

const InvoicePDF = ({ invoiceDetails, email, contactName }) => {
    const { invoiceDate, contactNumber, packName, bankName, paymentMode, price, razorpay_order_id, razorpay_payment_id } = invoiceDetails;
    const orderId = razorpay_order_id;
    const amount = price;
    const tax = amount * 0.18;
    let total = amount + tax;
    total = total.toFixed(2);
    const currentDate = invoiceDate ? new Date(invoiceDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }) : null;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>INVOICE</Text>
                    <View style={{ ...styles.address, marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                            <Image src="https://i.ibb.co/MV0q8vR/logo-final.png" style={{ width: 25, height: 30, marginRight: 5 }} />
                            <Text style={{ color: '#9284d3', fontWeight: "bold", fontSize: "20px" }}>CUET TestKnock</Text>
                        </View>
                        <Text>Office No. - 42, Durga Vihar,</Text>
                        <Text>near Amrapali Saphhire,</Text>
                        <Text>Sec-45, Noida-201301</Text>
                        <Text>Email: info@testknock.com</Text>
                        <Text>Website: cuet.testknock.com</Text>
                    </View>
                    <View style={{ flexDirection: 'row', fontSize: 12, justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                        <View>
                            <Text style={styles.boldText}>Name: {contactName}</Text>
                            <Text style={styles.boldText}>Contact No: {contactNumber}</Text>
                            <Text style={styles.boldText}>Email: {email}</Text>
                            <Text style={styles.boldText}>Payment ID: {razorpay_payment_id}</Text>
                        </View>
                        <View>
                            <Text style={{ ...styles.boldText, textAlign: "right" }}>{currentDate}</Text>
                            <Text style={{ ...styles.boldText, textAlign: "right" }}>Order ID: {orderId}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ ...styles.tableContainer, fontSize: 12, marginTop: 20, marginBottom: 20 }}>
                            <View style={[styles.tableRow, styles.tableHeader]}>
                                <Text style={styles.tableCell}>SI No.</Text>
                                <Text style={styles.tableCell}>Pack Name</Text>
                                <Text style={styles.tableCell}>Discount</Text>
                                <Text style={styles.tableCell2}>Price</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableCell}>1</Text>
                                <Text style={styles.tableCell}>{packName}</Text>
                                <Text style={styles.tableCell}>Rs. 0</Text>
                                <Text style={styles.tableCell2}>Rs. {amount}</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableCell} ></Text>
                                <Text style={styles.tableCell} ></Text>
                                <Text style={[styles.tableCell,]}>Tax 18%</Text>
                                <Text style={styles.tableCell2}>Rs. {tax}</Text>
                            </View>
                            <View style={styles.tableRow2}>
                                <Text style={styles.tableCell} ></Text>
                                <Text style={styles.tableCell} ></Text>
                                <Text style={[styles.tableCell, { backgroundColor: '#9284d3' }]}>Grand Total</Text>
                                <Text style={[styles.tableCell, { backgroundColor: '#9284d3', padding: '3', fontWeight: 'bold' }]}>Rs. {total}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 30, fontSize: 13, }}>
                        <Text>Payment Mode: {paymentMode}</Text>
                        <Text>Bank: {bankName}</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ ...styles.boldText, textAlign: 'center', fontSize: 16 }}>Terms and Conditions:</Text>
                        <Text style={{ fontSize: 12, marginTop: 10, borderTopWidth: 1, padding: "5px", borderTopColor: '#000000', color: '#5b5b5b', textAlign: 'justify' }}>
                            (a) The terms of this Agreement shall be binding for any further goods/services supplied by Company to Client.
                            (b) Upon execution of this Agreement, Client is agreeing to pay to Company, the full amount of the Fee.
                            (c) If client does not cancel attendance at, or participation in, the Program for any reason whatsoever, Client will not be entitled to receive a refund.
                            (d) Amount is inclusive of Tax.
                            (e) All disputes are subjected to New Delhi Jurisdiction.
                        </Text>
                    </View>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#000000', borderBottomWidth: 1, borderBottomColor: '#000000', padding: 8, marginTop: 20 }}>
                        <Text style={{ fontSize: 14, color: '#2f2929', textAlign: 'center' }}>
                            This is a computer-generated Invoice hence Stamp and Signature not required.
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default InvoicePDF;