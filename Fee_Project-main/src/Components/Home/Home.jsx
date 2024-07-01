import React from 'react';
import {Link , NavLink } from 'react-router-dom'

function Home() {
  return (
    <div >  
        <div className='flex mt-16 bg-purple-50 h-[35rem] '>
            <div >
                <h1 className='text-4xl ml-36 font-serif pt-36 '>Education is not the filling of a <br />pail, but the lighting  of a fire. <br />-William Butler Yeats</h1><br />   
                <p className=' text-lg mr-28 font-mono ml-36'>Our aspiration is to extend Vision Hub's reach to every corner of India.</p>
            </div>
            <div className='rounded-2xl overflow-hidden'>
              <h1 className='text-white'>Vision Hub</h1>
                <img
                className='w-[30rem] h-[20rem] pt-8 '
                src="https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png"
                alt=""
                style={{
                borderRadius: '71% 29% 75% 25% / 80% 50% 50% 20% ',
                }}/>
            </div>
      </div>
      <div className='flex bg-white   h-56 mb-5  shadow-2xl cursor-pointer mx-36 '>
       <div className='mt-6 '>
        <img className='h-16 ml-16' src="https://i.pinimg.com/564x/03/4e/68/034e68e576b9eb84f833aca0b0d2aef2.jpg" alt="" />
       <h1 className='text-2xl ml-16 font-bold mt-3'>Daily Live</h1>
       <p className='ml-[4rem] font-serif'>Interactive classes</p>
       </div>
       <div className='mt-2 ml-32'>
        <img className='h-24 ml-[6rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-ay8FK9E2DctzM0PQxkE2i9y9xY9toIvqb6Qifansw&s" alt="" />
        <h1 className='text-xl  font-bold ml-24'>10 Million </h1>
        <p className='font-serif  ml-24'>Tests, sample papers & notes</p>
       </div>
       <div className='mt-3 ml-32'>
        <img className='h-24 ml-[5rem]' src="https://media.istockphoto.com/id/1224211962/vector/puzzled-mind-glyph-icon-mental-exercise-intelligence-test-critical-thinking-brain-teaser.jpg?s=612x612&w=0&k=20&c=Y1La1vsXv3SqQ7_LYRCH4wZWspxLqbfCexI_SD7dwBI=" alt="" />
        <h1 className='font-bold ml-24 text-xl'>24 x 7</h1>
        <p className='font-serif ml-24  '>Doubt solving sessions</p>
       </div>
       <div className='mt-4 ml-48'>
        <img className='h-[5rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ15pwMGa0SrrWFih50-cg0Jw_-doPtS15ghYXEzg95w&s" alt="" />
        <h1 className='text-xl font-bold ml- mt-2'>100 +</h1>
        <p className='font-serif mb-2'>Offline centres</p>
       </div>
      </div>
      <div className=''>
        <h1 className='font-semi-bold text-3xl font-mono ml-36 mt-24'>Select your goal / exam</h1>
        <p className='text-xl font-serif ml-36 mt-3'>200+ exams available for your preparation</p>
        <h1 className='ml-36 mt-16 font-semibold text-5xl font-serif'>Popular goals</h1>
      </div>
     <div className='flex'>
     <div className='bg-gray-50 h-80 w-72 cursor-pointer ml-48 hover:bg-gray-100 border-2 mt-24'>
        <div className='pt-16  '>
          <img className='h-24 ml-24 ' src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/upsc.svg?q=75&auto=format%2Ccompress&w=96" alt="" />
          <h1 className='text-2xl font-semibold mt-4 ml-[4rem]'>UPSC CSE-GS</h1>
        </div>
      </div>
      <div className='bg-gray-50 h-80 w-72 cursor-pointer ml-36 hover:bg-gray-100 border-2 mt-24'>
        <div className='pt-16  '>
          <img className='h-24 ml-24 ' src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/iit_jee.svg?q=75&auto=format%2Ccompress&w=96" alt="" />
          <h1 className='text-2xl font-semibold mt-4 ml-[6rem]'>IIT JEE</h1>
        </div>
      </div>
      <div className='bg-gray-50 h-80 w-72 cursor-pointer ml-36 hover:bg-gray-100 border-2 mt-24'>
        <div className='pt-16  '>
          <img className='h-24 ml-24 ' src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/neet_ug.svg?q=75&auto=format%2Ccompress&w=96" alt="" />
          <h1 className='text-2xl font-semibold mt-4 ml-[6rem]'>NEET UG</h1>
        </div>
      </div>
     </div>
     <div className='flex'>
     <div className='bg-gray-50 h-80 w-72 cursor-pointer ml-48 hover:bg-gray-100 border-2 mt-24'>
        <div className='pt-16  '>
          <img className='h-24 ml-24 ' src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/bank_exams.svg?q=75&auto=format%2Ccompress&w=96" alt="" />
          <h1 className='text-2xl font-semibold mt-4 ml-[4rem]'>Bank Exams</h1>
        </div>
      </div>
      <div className='bg-gray-50 h-80 w-72 cursor-pointer ml-36 hover:bg-gray-100 border-2 mt-24'>
        <div className='pt-16  '>
          <img className='h-24 ml-24 ' src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/class_12.svg?q=75&auto=format%2Ccompress&w=96" alt="" />
          <h1 className='text-2xl font-semibold mt-4 ml-[4rem]'>CBSE Class 12</h1>
        </div>
      </div>
      <div className='bg-gray-50 h-80 w-72 cursor-pointer ml-36 hover:bg-gray-100 border-2 mt-24'>
        <div className='pt-16  '>
          <img className='h-24 ml-24 ' src="https://static.uacdn.net/production/_next/static/images/home/goalIcons/ca.svg?q=75&auto=format%2Ccompress&w=96" alt="" />
          <h1 className='text-2xl font-semibold mt-4 ml-[4rem]'>CA Intermediate</h1>
        </div>
      </div>
     </div>
     <div class="accent-emerald-500/25 rounded-lg ">
      <div class="mt-32 flex justify-center">
        <h1 class="font-extrabold text-5xl ">Students Review</h1>
      </div>
      <div class="flex justify-center mt-4">
        <p class="font-semibold font-serif">Check-out the reviews of our Students!</p>
      </div>
      <div class="flex bg-yellow-50 h-[30rem]">
        <div class="bg-slate-100 hover:bg-slate-200  w-80 h-80 mt-28 shadow-2xl rounded-3xl ml-56 cursor-pointer ">
          <div class="w-36 rounded-full ml-20 mt-9 ">
            <img class="rounded-full mt-9 " src="https://previews.123rf.com/images/pressmaster/pressmaster1608/pressmaster160800171/60799112-portrait-of-female-college-student-smiling-at-camera.jpg" alt=""/>
          </div>
            <h1 className='ml-28 text-2xl font-thin mt-2' >  Yennefer</h1>
            <p className='text-sm ml-8'>An excellent resource for online education. The lessons are clear and concise, making it easy to understand even complex topics.</p>
          </div>
          <div class="bg-slate-100 hover:bg-slate-200  w-80 h-80 mt-28 shadow-2xl rounded-3xl ml-5  cursor-pointer">
            <div class="w-36 rounded-full ml-20 mt-9 ">
              <img class="rounded-full mt-9 " src="https://www.shutterstock.com/image-photo/portrait-cheerful-male-international-indian-600nw-2071252046.jpg"/>
            </div>
              <h1 class="ml-28 font-thin text-2xl mt-2">Gerault</h1>
              <p className='text-sm ml-8'> Wonderful website! The courses are well-structured and the content is engaging. I love how interactive the lessons are, and the quizzes really help me test my knowledge.  </p>
            </div>
            <div class="bg-slate-100 hover:bg-slate-200  w-80 h-80 mt-28 shadow-2xl rounded-3xl ml-5  cursor-pointer">
              <div class="w-36 rounded-full ml-20 mt-9 ">
                <img class="rounded-full mt-9  " src="https://media.istockphoto.com/id/1272815911/photo/young-indian-female-university-student-stock-photo.jpg?s=612x612&w=0&k=20&c=Iwdc08GR3pw8_Qg3_nabNJUQYTo52EU3dvW4tsth1tE=" alt=""/>
              </div>
                <h1 class="ml-32 text-2xl font-thin mt-2">Ciri</h1> 
                <p className='text-sm ml-10'>Fantastic learning platform! The instructors are knowledgeable and the videos are very informative. </p>
              </div>
      </div>
    </div>
                
    </div>
  );
}
export default Home;
