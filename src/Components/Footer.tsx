


function Footer() {
  

    return (
     <div className="mt-[200px]">
        <div className="flex justify-center items-center space-x-8">
        <img src='/images/facebook.svg' alt='logo'  />
        <img src='/images/twitter.svg' alt='logo'  />
        <img src='/images/instagram.svg' alt='logo' />
        <img src='/images/youtube.svg' alt='logo'  />
        </div>

        <div className="lg:flex-row lg:justify-center lg:items-center flex flex-col justify-center items-center space-y-8 space-x-0 lg:space-y-0 lg:space-x-8 text-[18px] font-bold mt-8">
            <p>Conditions of Use</p>
            <p>Privacy and Policy</p>
            <p>Press Room</p>
        </div>

    <p className="text-gray-500 lg:text-[18px] text-[16px] font-bold flex justify-center items-center my-12">© 2023 MovieBox by Michael Ebo Andorful</p>
         </div>
    )
  }
  
  export default Footer
  