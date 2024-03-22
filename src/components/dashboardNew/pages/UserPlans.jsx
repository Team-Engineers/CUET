import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { pdf } from '@react-pdf/renderer';
import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../utils/context';
import { subtopicsData1 } from "../../../utils/courses";
import InvoicePDF from './InvoicePDF';

const Packages = [
    {
        _id: "65d93ff1aaf8ebc47c522ced",
        nameOfPlan: 'SOLO PACK',
        amount: 699,
        benefits: [
            'General English / General Test /',
            'Any one Domain Subject',
            'Full Access to Prep Modules',
            '12 Practice Tests',
            '12 Mock Tests',
            'Total one Subject',
            'Unlimited Attempts '
        ],
        bgColor: 'rgb(208, 239, 245, 0.8)'
    },
    {
        _id: "65d94008aaf8ebc47c522cef",
        nameOfPlan: 'PAIR PACK',
        benefits: [
            'General English & General Test /',
            'Any two Domain Subject',
            'Full Access to Prep Modules',
            '12 Practice Tests for each Subject',
            '12 Mock Tests for each Subject',
            'Total two Subjects',
            'Unlimited Attempts '
        ],
        bgColor: 'rgb(242, 224, 223, 0.6)'
    },
    {
        _id: "65d9428fd3267bf1efe0f364",
        nameOfPlan: 'MEGA PACK',
        benefits: [
            'Both General English & General Test',
            'Any three Domain Subject',
            'Full Access to Prep Modules',
            'Full Access to Practice Tests',
            '12 Mock Tests for each Subject',
            'Total five Subjects',
            'Unlimited Attempts '
        ],
        bgColor: 'rgb(217, 196, 240, 0.6)'
    },
    {
        _id: "65e352e265a057561b4dcb67",
        nameOfPlan: 'JUMBO PACK',
        benefits: [
            'Both General English & General Test',
            'Any four Domain Subject',
            'Full Access to Prep Modules',
            'Full Access to Practice Tests',
            '12 Mock Tests',
            'Total six Subjects',
            'Unlimited Attempts '
        ],
        // bgColor: 'rgb(242, 224, 223, 0.6)'
        bgColor: 'rgb(203, 179, 84, 0.6)'
    },
];
const renderIcon = (benefit) => {
    switch (benefit) {
        case 'Both General English & General Test':
        case 'Unlimited Attempts ':
        case 'Full Access to Prep Modules':
        case '12 Practice Tests':
        case '12 Mock Tests':
        case '12 Practice Tests for each Subject':
        case '12 Mock Tests for each Subject':
        case 'Full Access to Practice Tests':
            return <FaCheck className='text-green-400' />;
        case 'Any one Domain Subject':
        case 'Any two Domain Subject':
            return <span>&ensp;&ensp;</span>;
        default:
            return <FaCheck className='text-green-400' />;
    }
};

const UserPlans = () => {
    const [auth] = useAuth();
    const invoiceDetailsList = auth?.user?.invoiceDetails || [];
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const [currentPackage, setCurrentPackage] = useState(null);

    useEffect(() => {
        if (invoiceDetailsList.length > 0) {
            setSelectedInvoice(invoiceDetailsList[invoiceDetailsList.length - 1]);
        }
    }, [invoiceDetailsList]);

    useEffect(() => {
        if (selectedInvoice) {
            setCurrentPackage(selectedInvoice.packageID);
        }
    }, [selectedInvoice]);
    const selectedSubjects = auth?.user?.selectedSubjects || [];
    const selectedPackage = Packages.find(package1 => package1._id === currentPackage);
    if (!selectedPackage) {
        return <div>No package found for the current user.</div>;
    }
    const { nameOfPlan, benefits, bgColor } = selectedPackage;

    const email = auth?.user?.email;
    const username = auth?.user?.name;
    const downloadPDF = async () => {
        if (!selectedInvoice) return;
        const blob = await pdf(<InvoicePDF email={email} contactName={username} invoiceDetails={selectedInvoice} />).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `invoice_${selectedInvoice.packName}.pdf`;
        link.click();
    };
    return (
        <div style={{ background: bgColor }} className='flex lg:flex-row flex-col justify-evenly rounded-xl w-full items-center'>
            <div className='p-4 max-w-[350px] max-lg:w-full relative z-10 md:max-h-[700px] max-h-[800px] bg-white transition-all duration-100 shadow-2xl my-8 rounded-3xl backdrop-blur[40px] hover:scale-105 text-center text-black mx-3 '>
                <img className=' absolute w-[40px] m-1 right-0 top-0 h-[40px]' src={require("../../../assets/check.png")} alt="" />
                <div className='p-2 py-3'>
                    <h2 style={{ background: bgColor }} className='text-[25px] mb-6 border-dashed border-2 border-blue-950 p-2 mx-auto text-black whitespace-nowrap rounded-3xl '>{nameOfPlan}</h2>
                    <hr className='my-2' />
                    <h className='font-medium  text-left text-[13px] md:text-[18px]'>
                        {benefits.map((benefit, index) => (
                            <p key={index} className="mt-4">
                                {renderIcon(benefit)}
                                <span className='ml-3'>{benefit}</span>
                            </p>
                        ))}
                    </h>
                    <div className="">
                        <h>
                            <p className="w-full py-4  border transition-colors duration-100 hover:border-blue-800 border-[#23bd68] bg-[#23bd68] border-solid  md:mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Purchased
                                </span>
                            </p>
                        </h>
                    </div>
                </div>
            </div>
            <div className="flex flex-col max-lg:mb-10 h-full justify-between items-center">
                <h1 className='mb-6 gradient-text2'> Selected Subjects </h1>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                    {selectedSubjects.map((subject, index) => (
                        <Link key={subject._id}
                            to={`/courses/${subject.subjectName.split(" ").join("_")}`}
                            style={{ background: subtopicsData1[index + 4 % subtopicsData1.length].color }}
                            className="sm:w-[180px] no-underline transition-all duration-100 hover:scale-[105%] sm:h-[150px] w-[120px] h-[120px]  flex justify-center items-center relative z-10 rounded-2xl shadow-[10px_10px_4px_0px_rgba(0,0,0,0.3)]"
                        >
                            <div className="no-underline w-full flex flex-col items-center">
                                <img
                                    className="w-[50px] h-[50px] relative z-10"
                                    loading="eager"
                                    alt=""
                                    src={subtopicsData1[index % subtopicsData1.length].image}
                                />
                                <h2 className="text-[12px]  md:text-[20px] flex justify-center items-center text-white md:w-40 w-20 text-center">
                                    {subject.subjectName}
                                </h2>
                                <div className="text-black   rounded-b-2xl text-center justify-center w-full flex bg-[#e1d982e7] border-dashed border-white border-t-[1.5px] whitespace-nowrap border-l-0 border-r-0 border-b-[1.5px]  ">
                                    <p className="h-[2px] text-[10px] md:text-[12px]  flex justify-center items-center font-medium  ">
                                        <span className='max-md:hidden'>Valid till :</span> <span className='font-bold text-green-700'>{new Date(subject.validTill).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}</span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='my-7 w-full flex justify-between place-items-center gap-2 items-center'>
                    <TextField
                        select
                        fullWidth
                        label={selectedInvoice ? selectedInvoice.packName : 'Select Invoice'}
                        value={selectedInvoice ? selectedInvoice._id : ''}
                        onChange={(e) => {
                            const selectedId = e.target.value;
                            const selectedInvoiceData = invoiceDetailsList.find(invoice => invoice._id === selectedId);
                            setSelectedInvoice(selectedInvoiceData);
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    >
                        {invoiceDetailsList.map(invoice => (
                            <MenuItem key={invoice._id} value={invoice._id}>
                                {invoice.packName}
                            </MenuItem>
                        ))}
                    </TextField>

                    <button onClick={downloadPDF} className='w-[60%] py-4 cursor-pointer text-center border transition-colors duration-100 border-[#23bd68] bg-blue-800 border-solid hover:bg-[#23bd68] rounded-md text-white'>
                        Download Invoice
                    </button>
                </div>


                <div className=" w-[50%] justify-center items-center pt-5">
                    <Link to={'/purchase'}>
                        <p className="w-full py-4 cursor-pointer text-center border transition-colors duration-100 hover:border-blue-800 border-[#23bd68] bg-[#23bd68] border-solid hover:bg-blue-600  rounded-xl text-white">
                            <span className="font-medium">
                                Upgrade
                            </span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default UserPlans;