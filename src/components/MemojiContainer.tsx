import Image from 'next/image'
import myGif from '../../public/gifBackground.gif'

const MemojiContainer = () => {
    return (
        <div className='h-96 w-80 mx-auto flex flex-col items-center justify-center relative top-20'>
            <Image
                alt='Typescript logo'
                src='/TsLogo.png'
                width={40}
                height={40}
                className='animate-[float_4s_infinite_linear] absolute -top-10 z-10'
            />
            <Image
                alt='Javascript logo'
                src='/JsLogo.png'
                className='rounded-md animate-[float_6s_infinite_linear] absolute top-5 left-10 z-10'
                width={40}
                height={40}
            />
            <Image
                alt='Node logo'
                src='/NodeLogo.png'
                width={50}
                height={50}
                className='animate-[float_4s_infinite_linear] absolute top-0 right-5 z-10'
            />
            <Image
                alt='React logo'
                src='/ReactLogo.png'
                width={50}
                height={50}
                className='animate-[float_3s_infinite_linear] absolute left-0 top-32 z-10'
            />
            <div className='flex items-center justify-center flex-wrap relative'>
                <div className='absolute left-1/2 -translate-x-1/2 w-96 flex justify-center items-center'>
                    <Image
                        alt='Dougladmo logo'
                        src='/Memoji.png'
                        className='rounded-full absolute bottom-10 right-16'
                        width={240}
                        height={240}
                    />
                    <Image
                        alt='Background memoji'
                        src={myGif}
                        width={500}
                        height={500}
                        className='h-full w-full rounded-full -z-10 relative top-8 right-0'
                    />
                </div>
            </div>
            <Image
                alt='nextjs logo'
                src='/nextLogo.png'
                width={60}
                height={60}
                className='p-1 bg-white rounded-md animate-[float_3s_infinite_linear] relative left-32'
            />
            <Image
                alt='CSS logo'
                src='/CssLogo.webp'
                width={50}
                height={50}
                className='bg-[#379bd6] rounded-md animate-[float_5s_infinite_linear]  relative top-16 right-24'
            />
            <Image
                alt='Html logo'
                src='/HtmlLogo.webp'
                className='bg-[#e34d25] rounded-md animate-[float_4s_infinite_linear]  relative top-14'
                width={50}
                height={50}
            />
            <Image
                alt='Tailwind logo'
                src='/TailwindLogo.png'
                width={50}
                height={50}
                className='rounded-md bg-white animate-[float_5s_infinite_linear]  relative bottom-7 left-24'
            />
        </div>
    )
}

export default MemojiContainer