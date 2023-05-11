import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/loading.jpg"
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark 
        bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>
            <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank">
                    <h2 className="my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-2 dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10 dark:text-light"><GithubIcon /></Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                    dark:bg-light dark:text-dark sm:px-4 sm:text-base">Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className="w-full flex flex-col items-center justify-center border border-black border-solid rounded-2xl p-6 relative
        dark:border-light xs:p-4">
            {/* <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-2xl bg-dark"/>  :z-index not working here */}
            <Link href={link} target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank">
                    <h2 className="my-2 w-full text-left text-3xl font-bold hover:underline underline-offset-2 dark:text-light lg:text-2xl">{title}</h2>
                </Link>
                <div className="mt-2 w-full flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline dark:text-light md:text-base">Visit</Link>
                    <Link href={github} target="_blank" className="w-8 dark:text-light md:w-6"><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>om | projects</title>
            <meta name="description" content="any description"/>
        </Head>
        <TransitionEffect />
        <main className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout className="pt-16">
                <AnimatedText text="Imagination Trumps Knowledge."
                className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                />
                <div className="grid grid-cols-12 gap-24 gap-y-32 
                xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                    <div className="col-span-12">
                        <FeaturedProject
                        title="In Progress ..."
                        summary="A Blogging website where user can read blogs and also, create his own blogs. "
                        link="/"
                        github="/"
                        type="Featured project"
                        img={project1}
                        /> 
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project
                        title="In Progress ..." 
                        link="/"
                        github="/"
                        type="Featured project"
                        img={project1}
                        /> 
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project
                        title="In Progrss ..."
                        link="/"
                        github="/"
                        type="Featured project"
                        img={project1}
                        /> 
                    </div>
                </div>
            </Layout>
        </main>
    </>
  );
};

export default projects;
