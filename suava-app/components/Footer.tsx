import Image from 'next/image'; // Ensure you import the Next.js Image component

const Footer = () => {
    return (
        <footer className="bg-white text-center py-6 px-4 border-t text-sm text-gray-500">
            <p>&copy; 2023 Suava. All rights reserved.</p>

            <div className="flex gap-6 justify-center mt-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/x.svg" alt="Twitter" width={24} height={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/fb.svg" alt="Facebook" width={24} height={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/insta.svg" alt="Instagram" width={24} height={24} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;