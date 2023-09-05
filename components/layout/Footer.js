import Link from "next/link";

function FooterBlock() {
    return( 
      <div>
            <footer className="pt-40 pb-16 w-full">
              <p className="text-sm text-gray-500 text-center block">Copyright©︎kaikun</p>
              <div className="pt-2"></div>
              <ul className="flex gap-3 justify-center">
                <li className="text-sm text-gray-500 text-center block"><Link href="/license">MIT License</Link></li>
                <li className="text-sm text-gray-500 text-center block"><Link href="/privacypolicy">Privacy Policy</Link></li>
             </ul>
            </footer>
            
      </div>);
  }
  
  export default FooterBlock;
  