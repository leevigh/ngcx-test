import { FormControl, TextField } from '@mui/material'
import React from 'react'
import { ISocials } from '../interfaces'

interface Props {
    socials: ISocials,
    setSocials: React.Dispatch<React.SetStateAction<ISocials>>
}

const Socials = ({socials, setSocials}:Props) => {
  return (
    <>
        <div className='w-full flex flex-col gap-4'>
            <div className="relative">
                <FormControl sx={{ width: '100%',  }}>
                    <TextField id="outlined-basic" label="Twitter" variant="outlined" value={socials.twitter}
                        onChange={(e) => setSocials({ ...socials, twitter: e.target.value })} />
                </FormControl>
                {/* <input type="text" id="floating_outlined" className="block border-2 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={socials.twitter} onChange={(e) => setSocials({ ...socials, twitter: e.target.value })} />
                <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Twitter</label> */}
            </div>

            <div className="relative">
                <FormControl sx={{ width: '100%',  }}>
                    <TextField id="outlined-basic" label="Google+" variant="outlined" value={socials.google}
                        onChange={(e) => setSocials({ ...socials, google: e.target.value })} />
                </FormControl>
                {/* <input type="text" id="floating_outlined" className="block border-2 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={socials.google} onChange={(e) => setSocials({ ...socials, google: e.target.value })} />
                <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Google+</label> */}
            </div>
        </div>

        <div className='w-full flex flex-col gap-4'>
            <div className="relative">
                <FormControl sx={{ width: '100%',  }}>
                    <TextField id="outlined-basic" label="Facebook" variant="outlined" value={socials.facebook}
                        onChange={(e) => setSocials({ ...socials, facebook: e.target.value })} />
                </FormControl>
                {/* <input type="text" id="floating_outlined" className="block border-2 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={socials.facebook} onChange={(e) => setSocials({ ...socials, facebook: e.target.value })} />
                <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Facebook</label> */}
            </div>

            <div className="relative">
                <FormControl sx={{ width: '100%',  }}>
                    <TextField id="outlined-basic" label="LinkedIn" variant="outlined" value={socials.linkedin}
                        onChange={(e) => setSocials({ ...socials, linkedin: e.target.value })} />
                </FormControl>
                {/* <input type="text" id="floating_outlined" className="block border-2 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={socials.linkedin} onChange={(e) => setSocials({ ...socials, linkedin: e.target.value })} />
                <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">LinkedIn</label> */}
            </div>
        </div>
    </>
  )
}

export default Socials