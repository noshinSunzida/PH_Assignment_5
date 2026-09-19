
import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        
        <footer>
            <hr className="border-gray-100"></hr>
            <section className="grid grid-cols-5 max-w-7xl mx-auto my-8 pt-6">
            <div className="col-span-2">
                <img src={Logo} alt="" />
                <p className="footer-link py-4">Curated tools, technologies, and resources for developers building <br /> modern software.</p>

                <ul className="flex items-center gap-4 py-3">
                    <li><a href="" className="footer-social hover:underline">GitHub</a></li>
                    <li><a href="" className="footer-social hover:underline">Twitter</a></li>
                    <li><a href="" className="footer-social hover:underline">LinkedIn</a></li>
                </ul>

            </div>

            <div>
                <p className="footer-groups">PRODUCT</p>
                <ul>
                    <li><a href="" className="footer-link hover:underline">Home</a></li>
                    <li><a href="" className="footer-link hover:underline">Technologies</a></li>
                    <li><a href="" className="footer-link hover:underline">Projects</a></li>
                </ul>
            </div>

            <div>
                <p className="footer-groups">COMPANY</p>
                <ul>
                    <li><a href="" className="footer-link hover:underline">About</a></li>
                    <li><a href=""className="footer-link hover:underline">Contact</a></li>
                    <li><a href="" className="footer-link hover:underline">Careers</a></li>
                </ul>
            </div>

            <div>
                <p className="footer-groups">LEGAL</p>
                <ul>
                    <li><a href=""className="footer-link hover:underline">Privacy Policy</a></li>
                    <li><a href=""className="footer-link hover:underline">Terms of Service</a></li>
                </ul>
            </div>

            <hr className="col-span-5 border-gray-100 mt-8"/>
        </section>
        <div className="flex justify-between max-w-7xl mx-auto pb-10">

            <p className="font-jakarta text-[14px] text-slate-500">© 2026 Dev Stack. All rights reserved.</p>

            <ul className="flex items-center gap-4">
                    <li><a href="" className="footer-link hover:underline">Privacy</a></li>
                    <li><a href="" className="footer-link hover:underline">Terms</a></li>
            </ul>
        </div>
        </footer>
        
        
    );
};

export default Footer;