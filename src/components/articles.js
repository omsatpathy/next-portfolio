import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../public/images/articles/create loading screen in react js.jpg'
import { motion, useMotionValue } from 'framer-motion'
import article3 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import article4 from '../../public/images/articles/smooth scrolling in reactjs.png'
import article5 from '../../public/images/articles/todo list app built using react redux and framer motion.png'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({title, img, link}) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    function handleMouse(event){
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-10)
    }
    function handleMouseLeave(event){
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='capitalize font-semibold text-xl hover:underline'>{title}</h2>
            <FramerImage
             ref={imgRef} src={img} alt={title} className='w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden'
             style={{ x:x, y:y }}
             initial={{opacity: 0}}
             whileInView={{opacity: 1, transition: {duration: 0.2}}}
            />
        </Link>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className='col-span-1 w-full h-full p-4 bg-light border border-solid border-dark rounded-2xl relative
        dark:bg-dark dark:border-light'>
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light"/>
            <Link href={link} target="_blank"
            className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline dark:text-light
                xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2 dark:text-light'>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const Article = ({img, title, date, link}) => {
    return (
        <motion.li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0
        border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light
        sm:flex-col'
        initial={{y: 200}}
        whileInView={{y: 0, transition: {duration: 0.5, ease: "easeInOut"}}}
        viewport={{once: true}}
        >
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const articles = () => {
  return (
    <>
    <Head>
        <title>om | Articles page</title>
        <meta name="description" content="any description" />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text="Welcome to my little blog-space." className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticle title="Build A Custom Pagination Component In Reactjs From Scratch"
                    summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                    time="9 min read"
                    link="/"
                    img={article1}
                    />
                    <FeaturedArticle title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                    summary="Learn how to create stunning loading screens in React with 3 different methods. 
                    Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                    Improve the user experience."
                    time="10 min read"
                    link="/"
                    img={article2}
                    />
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All articles</h2>
            <ul>
                <Article 
                img={article3}
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="May 10, 2023"
                link="/"
                />
                <Article 
                img={article4}
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="May 10, 2023"
                link="/"
                />
                <Article 
                img={article5}
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="May 10, 2023"
                link="/"
                />
                <Article 
                img={article4}
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="May 10, 2023"
                link="/"
                />
                <Article 
                img={article3}
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="May 10, 2023"
                link="/"
                />
                <Article 
                img={article5}
                title="Form validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="May 10, 2023"
                link="/"
                />
                <Article 
                img={article3}
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="May 10, 2023"
                link="/"
                />
            </ul>
        </Layout>
    </main>
    </>
  )
}

export default articles