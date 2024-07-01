import React from 'react'

function Contact() {
  return (
    <div>
      <div>
        <h1 className='text-3xl font-semibold mt-24 ml-24 font-serif'>Contact Us</h1>
        <p className='ml-24 mt-4 text-xl'>This is the official page of Vision Hub, where you can share all your queries, feedback, complaints, or any concern you may have about our centers, courses, <br /> and programs. <br /> <br />

          Vision Hub, India's leading student-oriented Edtech organization, is here to help all the students to solve their grievances. We're here to help you. We aim to <br /> solve all the queries within 7 days. You can call on Vision Hub official Contact No. 987654321, 24 x 7. If the phone is busy, we're resolving someone else's <br /> queries. We request you to contact us again after 15 minutes so that we can address your query or concern you may have regarding lectures or course material. <br /> You may notify us in the "contact us" section only. Your suggestions will help us improve and give you and all the children a bright future. <br /> <br />

        In Case of any grievance, don't hesitate to get in touch with us on Vision Hub official contact number 987654321. Or you can write to us at VisionHub@gmail.com
        </p>
      </div>

      <div className='flex'>
        <div>
          <h1 className='text-3xl mt-48 ml-24 font-mono font-bold'>Vision Hub </h1>
          <h1 className='text-xl mt-8 ml-24'>Chandigarh-Patiala National Highway <br /> <br /> (NH- 64 Village Jansla, Rajpura, Punjab 140401)</h1>
          <p className='ml-24 mt-8'>VisionHub@gmail.com</p>

        </div>
      
        <iframe className='mt-24 ml-56' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751343148626!2d76.6597778!3d30.516086499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1716190708103!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>
      <div>
      <h2 className='text-5xl font-serif flex justify-center  mt-24 '>Get In Touch</h2>
      </div>
    <div className='flex bg-gray-100' >
      <div className='ml-24'>
        <img className='mt-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1oK_kJfKKch9eQs7VAz-qE1Xh7jyoRbFAPD-KOO-Qw&s" alt="" />
      </div>
    

      <div className="mt-16 ml-56">
        <form className='display border-2 ' action="#" method='POST'>
          <input
          type="text"
          name='username'
          placeholder='username'
          autoComplete='off'
          required
          />
        </form>
          <form className='mt-6 border-2'>
          <input
          type="email"
          name='Email'
          placeholder='Email'
          autoComplete='off'
          required
          />
          </form>

          <form className='mt-6'>
          <textarea 
          name="message"
          cols = "30"
          rows="6"
          autoComplete='off'
          required>
          </textarea>
          </form>

          <input type="submit" value="Submit" />
        
      </div>
    </div>
    </div>
  )
}

export default Contact
