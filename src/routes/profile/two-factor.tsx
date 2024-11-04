import { useState } from "react";

function TwoFactor() {

    const [emailVerification, setEmailVerification] = useState('email-no');
    const [phoneVerification, setPhoneVerification] = useState('phone-no');

    const [emailConfirmation, setEmailConfirmation] = useState('email-unconfirmed');
    const [phoneConfirmation, setPhoneConfirmation] = useState('phone-unconfirmed');
    

    return (
        <div className="">
            <div className="border rounded-lg p-5">
                <div className="flex flex-col gap-y-1">
                    <div className="text-lg">Two-Factor Authentication</div>
                    <div className="text-sm text-slate-600">Enable two-factor authentication for extra security.</div>
                    <div className="flex flex-col gap-y-4 mt-4">
                        <div className="flex flex-col gap-y-1">
                            {emailVerification === 'email-no' && (
                                <div>
                                    <label className="text-left text-black text-sm text-sm">Email</label>
                                    <div className="flex flex-row items-center gap-x-2.5">
                                        <input className="text-sm text-black border rounded py-2.5 px-3 focus:outline-none grow" placeholder="xxxxxxxxxx@gmail.com" />
                                        <button className="text-sm p-2.5 border hover:bg-slate-700 focus:outline-none rounded bg-black text-white" onClick={() => setEmailVerification('email-yes')}>Send Authentication Code</button>
                                    </div>
                                </div>
                            )}
                            {emailVerification === 'email-yes' && (
                                <div>
                                    <label className="text-left text-black text-sm text-sm">Email</label>
                                    <div className="flex flex-row items-center gap-x-2.5">
                                        <input className="text-sm text-black border border-slate-400 rounded py-2.5 px-3 focus:outline-none grow" placeholder="wile.e.coyote@cc.ca" />
                                        <button className="text-sm p-2.5 border hover:bg-slate-700 focus:outline-none rounded bg-black text-white">Send Authentication Code</button>
                                    </div>
                                    <div className="text-sm text-slate-600 py-1">An authentication code has been sent to xxxxxxxxxxx@cc.ca and will expire in 5 minutes. Verify the code sent to your email.</div>
                                    <div className="flex flex-row items-center gap-x-2.5 mt-1">
                                        <input className="text-sm text-black border border-slate-400 rounded py-2.5 px-3 focus:outline-none" placeholder="XXXXXX" />
                                        <button className="text-sm p-2.5 border hover:bg-slate-700 focus:outline-none rounded bg-black text-white" onClick={() => {setEmailVerification(''); setEmailConfirmation('email-confirmed');}}>Verify</button>
                                    </div>
                                </div>
                            )}
                            {emailConfirmation === 'email-confirmed' && (
                                <div className="flex flex-col gap-y-1">
                                    <label className="text-left text-black text-sm text-sm">Email (Two-Factor Authentication Enabled)</label>
                                    <div className="text-sm w-full bg-tabs-gray text-black border border-slate-400 rounded py-2.5 px-3 focus:outline-none cursor-default text-slate-500">wile.e.coyote@cc.ca</div>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-y-1">
                            {phoneVerification === 'phone-no' && (
                                <div>
                                    <label className="text-left text-black text-sm text-sm">Phone</label>
                                    <div className="flex flex-row items-center gap-x-2.5">
                                        <input className="text-sm text-black border rounded py-2.5 px-3 focus:outline-none grow" placeholder="(000) 000-0000" />
                                        <button className="text-sm p-2.5 border hover:bg-slate-700 focus:outline-none rounded bg-black text-white" onClick={() => setPhoneVerification('phone-yes')}>Send Authentication Code</button>
                                    </div>
                                </div>
                            )}
                            {phoneVerification === 'phone-yes' && (
                                <div>
                                    <label className="text-left text-black text-sm text-sm">Phone</label>
                                    <div className="flex flex-row items-center gap-x-2.5">
                                        <input className="text-sm text-black border border-slate-400 rounded py-2.5 px-3 focus:outline-none grow" placeholder="(000) 000-0000" />
                                        <button className="text-sm p-2.5 border hover:bg-slate-700 focus:outline-none rounded bg-black text-white">Send Authentication Code</button>
                                    </div>
                                    <div className="text-sm text-slate-600 py-1">An authentication code has been sent to (XXX) XXX-XXXX and will expire in 5 minutes. Verify the code sent to your phone.</div>
                                    <div className="flex flex-row items-center gap-x-2.5 mt-1">
                                        <input className="text-sm text-black border border-slate-400 rounded py-2.5 px-3 focus:outline-none" placeholder="XXXXXX" />
                                        <button className="text-sm p-2.5 border hover:bg-slate-700 focus:outline-none rounded bg-black text-white" onClick={() => {setPhoneVerification(''); setPhoneConfirmation('phone-confirmed');}}>Verify</button>
                                    </div>
                                </div>
                            )}
                            {phoneConfirmation === 'phone-confirmed' && (
                                <div className="flex flex-col gap-y-1">
                                    <label className="text-left text-black text-sm text-sm">Phone (Two-Factor Authentication Enabled)</label>
                                    <div className="text-sm w-full bg-tabs-gray text-black border border-slate-400 rounded py-2.5 px-3 focus:outline-none cursor-default text-slate-500">(647) 412-0786</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoFactor;