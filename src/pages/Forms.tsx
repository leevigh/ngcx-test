import React, { useState} from 'react'
import AppDrawer from '../components/AppDrawer'

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { IAccountDetails, IPersonalDetails, ISocials } from '../interfaces';
import PersonalInfo from '../components/PersonalInfo';
import Socials from '../components/Socials';
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Forms = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const [accountDetails, setAccountDetails] = useState<IAccountDetails>({
        username: '',
        email: '',
        password: '',
        confirm: ''
    })

    const [personalInfo, setPersonalInfo] = useState<IPersonalDetails>({
        firstname: '',
        lastname: '',
        country: '',
        language: []
    })

    const [socials, setSocials] = useState<ISocials>({
        twitter: '',
        facebook: '',
        google: '',
        linkedin: ''
    })

    const steps = [
        'Account Details',
        'Personal Info',
        'Social Links',
    ];

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    // const accountDetailsChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    //     const { name, value } = e.target

    //     setAccountDetails({ ...accountDetails, [name]: value })
    // }

    const isFormFilledOut = () => {
        return accountDetails.username !== '' && accountDetails.email !== '' && accountDetails.password !== '' && accountDetails.confirm !== ''
    }

    const handleNextStep:React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()

        if (currentStep === 1) {
            if (accountDetails.username === "" || accountDetails.email === "" || accountDetails.password === "" || accountDetails.confirm === "") {
              alert("Please fill in all fields.");
              return
            } else if(accountDetails.password !== accountDetails.confirm) {
                alert("Passwords don't match")
                return
            } else {
                setCurrentStep(currentStep + 1);
            }
        } else if (currentStep === 2) {
            if(personalInfo.firstname === "" || personalInfo.lastname === "" || personalInfo.country === "" || personalInfo.language.length === 0) {
                alert("Please fill in all fields")
                return
            } else {
                setCurrentStep(currentStep + 1)
            }
        } else if(currentStep === 3) {
            if(socials.facebook === '' || socials.google === '' || socials.linkedin === '' || socials.twitter === '') {
                alert("Please fill in all fields")
                return
            } else {
                setCurrentStep(currentStep + 1)
            }
        }
    }

    const handlePrevStep:React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()

        if(currentStep === 1) return

        setCurrentStep(currentStep -1)
    }

    const resetForm:React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()

        setAccountDetails({
            username: '',
            email: '',
            password: '',
            confirm: ''
        })

        setPersonalInfo({
            firstname: '',
            lastname: '',
            country: '',
            language: []
        })

        setSocials({
            twitter: '',
            facebook: '',
            google: '',
            linkedin: ''
        })

        setCurrentStep(1)
    }

    const submitForm:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault() 

        console.log("All Data", accountDetails, personalInfo, socials)
        setCurrentStep(currentStep+1)
    }


  return (
    <div>
        <>
            <AppDrawer>
                <main className='h-screen'>
                    <div className='flex flex-col justify-center max-w-[1400px]  mx-auto'>
                        <div className='py-8'>
                            {/* <ol className="flex items-center w-full">
                                <li className="flex w-full items-center text-[#72E128] dark:text-[#72E128] after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-[#72E128]">
                                    <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                        <svg aria-hidden="true" className="w-5 h-5 text-[#72E128] lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    </span>
                                </li>
                                <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                                    <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                    </span>
                                </li>
                                <li className="flex items-center w-full">
                                    <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    </span>
                                </li>
                            </ol> */}

                            <Stepper activeStep={currentStep + -1} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                            </Stepper>
                        </div>

                        <div className='p-4 shadow-md rounded-lg mt-8 bg-white'>
                            <div>
                                {currentStep === 1 && (
                                    <div className='mb-4'>
                                        <h2 className='text-base text-[#4C4E64]/[.87] font-semibold'>Account Details</h2>
                                        <p className='text-sm text-[#4C4E64]/[.87]'>Enter your account details</p>
                                    </div>
                                )}
                                {currentStep === 2 && (
                                    <div className='mb-4'>
                                        <h2 className='text-base text-[#4C4E64]/[.87] font-semibold'>Personal Info</h2>
                                        <p className='text-sm text-[#4C4E64]/[.87]'>Setup Information</p>
                                    </div>
                                )}
                                {currentStep === 3 && (
                                    <div className='mb-4'>
                                        <h2 className='text-base text-[#4C4E64]/[.87] font-semibold'>Social Links</h2>
                                        <p className='text-sm text-[#4C4E64]/[.87]'>Add social links</p>
                                    </div>
                                )}
                                {currentStep === 4 && (
                                    <div className='py-4'>
                                        <h2 className='text-sm text-[#4C4E64]/[.87]'>All steps are completed</h2>
                                    </div>
                                )}
                            </div>
                            <form onSubmit={submitForm} className=' flex flex-col lg:grid lg:grid-cols-2 gap-4'>
                                {currentStep === 1 && (
                                    <>
                                        <div className='w-full flex flex-col gap-4'>
                                            <div className="relative">
                                                <FormControl sx={{ width: '100%',  }}>
                                                    <TextField id="outlined-basic" label="Username" variant="outlined" value={accountDetails.username} onChange={(e) => setAccountDetails({...accountDetails, username: e.target.value})} />
                                                </FormControl>
                                            </div>

                                            <div className="relative">
                                                <FormControl sx={{ width: '100%',  }}>
                                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                        <OutlinedInput
                                                            id="outlined-adornment-password"
                                                            type={showPassword ? 'text' : 'password'}
                                                            value={accountDetails.password} onChange={(e) => setAccountDetails({...accountDetails, password: e.target.value})}
                                                            endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                                >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                            }
                                                            label="Password"
                                                        />
                                                </FormControl>
                                            </div>
                                        </div>

                                        <div className='w-full flex flex-col gap-4'>
                                            <div className="relative">
                                                <FormControl sx={{ width: '100%',  }}>
                                                    <TextField id="outlined-basic" label="Email" type={'email'} variant="outlined" value={accountDetails.email} onChange={(e) => setAccountDetails({...accountDetails, email: e.target.value})} />
                                                </FormControl>
                                            </div>

                                            <div className="relative">
                                                <FormControl sx={{ width: '100%',  }}>
                                                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                                        <OutlinedInput
                                                            id="outlined-adornment-password"
                                                            type={showPassword ? 'text' : 'password'}
                                                            value={accountDetails.confirm} onChange={(e) => setAccountDetails({...accountDetails, confirm: e.target.value})}
                                                            endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                aria-label="toggle confirm visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                                >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                            }
                                                            label="Password"
                                                        />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {currentStep === 2 && (
                                    <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
                                )}

                                {currentStep === 3 && (
                                    <Socials socials={socials} setSocials={setSocials} />
                                )}

                                    <div className='flex items-center justify-between col-span-2'>
                                        <div>
                                            <button 
                                                onClick={handlePrevStep} 
                                                className={`border-[1px] border-[#4C4E64]/[.87] rounded-lg px-4 py-2 text-[#4C4E64]/[.87] ${currentStep === 4 && 'hidden'}`} 
                                                disabled={currentStep === 1}>
                                                    Back
                                            </button>
                                        </div>
                                        <div>
                                            {currentStep <= 2 && <button className='rounded-lg bg-[#72E128] shadow-md px-4 py-2 font-semibold text-white' onClick={handleNextStep} disabled={!isFormFilledOut()}>Next</button>}
                                            {currentStep === 3 && <button type='submit' className='rounded-lg bg-[#72E128] shadow-md px-4 py-2 font-semibold text-white' disabled={!isFormFilledOut()}>Submit</button>}
                                            {currentStep === 4 && <button className='rounded-lg bg-[#72E128] shadow-md px-4 py-2 font-semibold text-white' onClick={resetForm}>Reset</button>}
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </main>
            </AppDrawer>
        </>
    </div>
  )
}

export default Forms