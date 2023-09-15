

function Header() {
  
   
  

    
  return (
   <div className='w-full mt-0' >
 
    <div className='w-full h-[600px]  p-0 m-0'   style={{
        backgroundImage: `url(/images/Poster.png )`,
        backgroundSize: 'cover', 
        backgroundPosition:'center'
      }} >
 
<div className='lg:pt-12 p-4  lg:flex-row lg:justify-center lg:items-center flex flex-col gap-y-4 lg:gap-y-0 lg:gap-x-[150px] gap-x-0 '>
    <div className='flex'><img src='/images/tv.png' alt='logo' />
    <h1 className='lg:text-[24px]  text-white pl-8 font-medium leading-tight pt-2'>MovieBox</h1>
</div>
<div className='flex justify-between items-start h-[36px] border-[2px] border-white  border rounded-lg p-[4px]'>
    <input type='text' placeholder='What do you want to watch ?'  
    className='bg-transparent text-white lg:w-[525px] w-[100px]  pl-2' 
     />
    <button > <img src='/images/Search.svg' alt='search' className='pl-2 ' /></button>
</div>

<div className='flex'>
    <h1 className='text-[16px] text-white pr-6'>Sign In</h1>
    <img src='/images/Menu.png' alt='logo' className='w-[36px] h-[36px]' />
</div>
    </div>

<div className='lg:w-[404px]  lg:pl-12 pt-[80px]'>
<h1 className='text-[48px] font-medium leading-tight text-white pl-12 '>John Wick 3 : Parabellum</h1>
<div className='flex pt-4'>
  
<div className='flex'><img src='/images/imdb.svg' alt='logo' className='pl-12' /> <p className='pl-2 text-18 text-white'>86.0/100</p></div>
<div className='flex'><img src='/images/tomato.svg' alt='logo' className='pl-12' /> <p className='pl-2 text-18 text-white'>97%</p></div>
</div>

<p className='text-white text-[14px] pt-4 flex text-justify text-start lg:pl-12 pl-6'>
  John wick is on the run after killing a member of the international assassins' guild,and with a $14 million on his head,
  he is the target for hitmen and women everywhere.
</p>
<img src='/images/Button.png' alt='logo' className='pt-4 pl-12' />
</div>


</div>
 



   </div>
  )
}

export default Header