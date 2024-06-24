import React, { useEffect, useState } from 'react';
import Image from '../../atoms/Image/Image';
import { Navbar } from '../Navbar/Navbar';


function Header() {

    return (
        <>
            <header className='position-relative fixed-top bg-dark p-3 text-white col-sm-12 '>
                <div className='d-flex'>
                    <div className='col-6'>
                        <Image
                            source="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                            width={"70px"}
                            height={"70px"}
                            alt={"Logo do site como This or That"}
                        />
                    </div>
                    <div className='col-6'>
                        <Navbar/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;