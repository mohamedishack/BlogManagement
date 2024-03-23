import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const FooterComponenr = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid-w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 ">
            <Link
              to="/"
              className="self-center whitespace-wrap text-xl sm:text-xl font-semi-bold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Medium
              </span>
              Blog
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsproject.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 Js Project
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/mohamedishack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy policy</Footer.Link>
                <Footer.Link href="#">Terms and conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright
          href="#"
          by="medium"
          year={new Date().getFullYear()}
        />
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook}></Footer.Icon>
          <Footer.Icon href="#" icon={BsInstagram}></Footer.Icon>
          <Footer.Icon href="#" icon={BsTwitter}></Footer.Icon>
          <Footer.Icon href="#" icon={BsGithub}></Footer.Icon>
          <Footer.Icon href="#" icon={BsDribbble}></Footer.Icon>
        </div>
      </div>
      </div>
    </Footer>
  );
};

export default FooterComponenr;
