import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
import {motion} from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { SunIcon, MoonIcon } from './Icons'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter()

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`absolute h-[1px] inline-block bg-dark -bottom-0 left-0 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light
            `}>
            &nbsp;
            </span>
        </Link>
    )
}
const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`absolute h-[1px] inline-block bg-light -bottom-0 left-0 
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-dark
            `}>
            &nbsp;
            </span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
      <header
      className='w-full px-32 py-8 flex items-center justify-between
      dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

        <button className='flex-col items-center justify-center hidden lg:flex' onClick={handleClick}>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        <div className='w-full flex justify-between items-center lg:hidden'>
            <nav>
                <CustomLink href='/' title='Home' className='mr-4' />
                <CustomLink href='/about' title='About'  className='mx-4'/>
                <CustomLink href='/projects' title='Projects' className='mx-4'/>
                {/* <CustomLink href='/articles' title='Articles' className='ml-4'/> */}
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href='https://www.twitter.com/omsatpathy007' target={'_blank'}
                className='w-6 mx-3'
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <TwitterIcon/>
                </motion.a>
                <motion.a href='https://www.github.com/omsatpathy' target={'_blank'}
                className='w-6 mx-3'
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <GithubIcon/>
                </motion.a>
                <motion.a href='https://www.linkedin.com/in/om-satpathy' target={'_blank'}
                className='w-6 ml-3'
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <LinkedInIcon/>
                </motion.a>

                <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                `}
                >
                    {
                        mode === "dark" ? <MoonIcon className={"fill-dark"}/> : <SunIcon className={"fill-dark"}/>
                    }
                </button>
        </nav>
       </div>

        {
            isOpen ?

            <motion.div className='min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32'
            initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
            animate={{scale:1, opacity:1}}>
            <nav className='flex flex-col items-center justify-center'>
                <CustomMobileLink href='/' title='Home' className='' toggle={handleClick} />
                <CustomMobileLink href='/about' title='About'  className='' toggle={handleClick}/>
                <CustomMobileLink href='/projects' title='Projects' className='' toggle={handleClick}/>
                {/* <CustomMobileLink href='/articles' title='Articles' className='' toggle={handleClick}/> */}
            </nav>

            <nav className='flex items-center justify-center flex-wrap mt-2'>
                <motion.a href='https://www.twitter.com/omsatpathy007' target={'_blank'}
                className='w-6 mx-3 sm:mx-1'
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <TwitterIcon/>
                </motion.a>
                <motion.a href='https://www.github.com/omsatpathy' target={'_blank'}
                className='w-6 mx-3 sm:mx-1 text-light dark:text-dark'
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <GithubIcon/>
                </motion.a>
                <motion.a href='https://www.linkedin.com/in/om-satpathy' target={'_blank'}
                className='w-6 ml-3 sm:mx-1'
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                >
                    <LinkedInIcon/>
                </motion.a>

                <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                    {
                        mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
                    }
                </button>
        </nav>
            </motion.div>

            : null
        }

       <div className='absolute left-[48%] top-2 -translate-x-[50%]'>
            <Logo />
       </div>
      </header>
    </div>
  )
}

export default NavBar
