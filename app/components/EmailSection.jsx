import GithubIcon from '../../public/github-icon.svg';
import LinkedInIcon from '../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div className='z-10'>
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I&apos;m always open to new projects, collaborations, or employment opportunities. Feel free to reach out to me via email or connect with me on social media.
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/enmanuelsabarua">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/enmanuel-sanchez-abarua-7609851a5/">
                        <Image src={LinkedInIcon} alt="LinkedIn Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col'>
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
                        <input type="email" id='email' required className='bg-[#18191E] border border-[#33343F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='jacob@gmail.com' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                        <input type="text" id='text' required className='bg-[#18191E] border border-[#33343F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Just saying hi' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Message</label>
                        <textarea id='message' required className='bg-[#18191E] border border-[#33343F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Your message here' />
                    </div>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection;