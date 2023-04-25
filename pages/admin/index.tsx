import React from 'react'
import Image from 'next/image'

const Index = () => {
    return (
        <div>
            <div className="bg-primaryColor">
                <div className='container mx-auto p-12 '>
                    <div className="bg-white rounded-2xl flex flex-col md:flex-row">
                        <aside>
                            <div className='rounded-2xl max-w-sm py-12 px-9 bg-sideBarColor'>
                                <div className="flex flex-col md:flex-row items-center ">
                                    <div className="relative w-14 h-14 ">
                                        <Image src="/profile.png" alt=""
                                            className="rounded-full " fill priority={false} />
                                    </div>
                                    <div className='ml-4'>
                                        <h3 className='font-bold'>Nirmal Dangi</h3>
                                        <p>codernirmal@gmail.com</p>
                                    </div>

                                </div>
                            </div>

                        </aside>
                        <section>
                            Billing
                        </section>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Index