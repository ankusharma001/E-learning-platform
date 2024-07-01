import React from 'react';

function AboutUs() {
  return (
    <>
      <div className='flex justify-center text-4xl font-serif cursor-pointer bg-gray-50'>
        <h1 className='mt-16' >About-Us</h1>
      </div>
      <div className='flex mt-[5rem] bg-gray-50 '>
        <div className='bg-gray-100'>
        <img  src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="" />
        </div>
        <p className='font-thin text-2xl mt-24 font-mono'>Vision-hub is a student lifelong learning partner that is democratizing <br /> education at scale in India, with a presence spanning online, offline, <br /> and hybrid modes,  reaching 98% of India's pin codes. <br /> Vision-Hub also provides quality education to more than 36 million <br />students through its 80 YouTube channels in 8 vernacular languages</p>
      </div>
      <div className='bg-yellow-50 hover:bg-yellow-100 h-96 '>
        <div className='flex justify-center'>
        <h1 className='pt-9 text-3xl font-semibold font-serif  '>Our Mission</h1>
        </div>
        <div className='flex cursor-pointer'>
        <div className='bg-red-200 hover:bg-red-300 w-80 h-36 ml-36 mt-24 rounded-3xl'>
          <img className='h-5' src="" alt="" />
          <h1 className='ml-12 pt-5 font-semibold font-serif text-xl'>To aim for Equity and <br /> inclusivity in Education</h1>
        </div>
        <div className='bg-red-200 hover:bg-red-300 w-80 h-36 ml-36 mt-24 rounded-3xl'>
          <img src="" alt="" />
          <h1 className='ml-16 pt-7 font-semibold font-serif text-xl'>To reach learners in every corner of the country</h1>
        </div>
        <div className='bg-red-200 hover:bg-red-300 w-80 h-36 ml-36 mt-24 rounded-3xl'>
          <h1 className='ml-16 pt-9 font-semibold font-serif text-xl'>To build abusiness sustainability</h1>
        </div>
        </div>
      </div>
      <div className='bg-purple-100 h-[30rem] hover:bg-purple-200'>
        <h1 className='flex justify-center text-4xl pt-16 font-bold font-serif'>Our Vision</h1>
        <div className='flex'>
         <div className='text-xl ml-12 mt-24 font-thin font-mono' >
          <p>* To democratize education at scale in India.</p><br />
          <p>* To ensure every child has access to quality education at the most affordable costs.</p><br />
          <p>* To allow every child to realize his/her dream, live up to their true .</p>
          <p className='ml-5'> potential and be their lifelong learning partner</p>
         </div>
         <div className='h-4'>
          <img className='h-80 ml-5 mt-5 rounded-lg' src="https://t3.ftcdn.net/jpg/03/88/97/92/360_F_388979227_lKgqMJPO5ExItAuN4tuwyPeiknwrR7t2.jpg" alt=""
          style={{
          borderRadius: '50% 50% 46% 54% / 48% 48% 52% 52% ',
          }}/>
         </div>
        </div>
      </div>
      <div className='bg-pink-100 hover:bg-pink-200 h-[35rem] cursor-pointer'>
        <h1 className='flex justify-center text-4xl pt-1 font-bold font-serif'>Our presence</h1>
        <div className='flex'>
         <div className='text-xl ml-24 mt-8 font-thin font-mono' >
          <p>Our footprint extends across more than 100 cities, with a widespread <br />network of over 120  Vidyapeeth centers spanning the entire country.</p>
          <div className='bg-red-200 hover:bg-red-300 hover:opacity-2 mt-16 rounded-2xl w-96 h-16'>
          <h1 className='text-3xl font-semibold font-mono pt-3 ml-2'>100+ Cities</h1>
          </div>
          <div className='bg-red-200 hover:bg-red-300 mt-16 rounded-2xl w-96 h-16'>
          <h1 className='text-3xl font-semibold font-mono pt-3 ml-2'>120+ Centers</h1>
          </div>
          <div className='bg-red-200 hover:bg-red-300 mt-16 rounded-2xl w-96 h-16'>
          <h1 className='text-3xl font-semibold font-mono pt-3 ml-2'>28 Exams Categories</h1>
          </div>
         </div>
         <div className='h-4'>
          <img className='h-[30rem] ml-24 mt-5 rounded-lg' src="https://upload.wikimedia.org/wikipedia/commons/b/b8/India_colour.png" alt=""
          style={{
          borderRadius: '50% 50% 46% 54% / 48% 48% 52% 52% ',
          }}/>
         </div>
        </div>
        
      </div>
      <div className='bg-purple-300 h-96 mt-8 mx-36 rounded-3xl cursor-pointer'>
        <div className='flex'>
          <div>
            <h1 className='text-3xl font-semibold pt-8 ml-16 font-mono'>Join 15 Million students on the app today!</h1>
            <p className='text-xl font-serif ml-16 pt-8'>* Live & recorded classes available at ease</p>
            <p className='text-xl font-serif ml-16 pt-8'>* Dashboard for progress tracking</p>
            <p className='text-xl font-serif ml-16 pt-8'>* Millions of practice questions at your fingertips</p>
          </div>
          <div>
            <img className='h-80 mt-5 mr-16 rounded-full' src="https://solguruz.com/wp-content/uploads/2023/11/Dynamic-E-Learning-App-Trends-in-the-Education-App-Development.png" alt="" />
          </div>
        </div>
      </div>
     
      
    </>
  )
}
export default AboutUs;
