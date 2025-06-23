import Image from 'next/image';

export default function Background() {
    return (
        <div className="fixed top-0 left-0 -z-1 w-screen h-screen">
            <Image
                src="/background.png"
                alt="Background"
                fill
                style={{ objectFit: 'cover' }}
                priority
            />
        </div>
    );
}
