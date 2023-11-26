import React from 'react'
import first from '../assets/1.png'
import second from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import tredmill from '../assets/tredmill.png'
import './content.css'

const Content = () => {
    return (
        <>
        <div className='first'>
<h1 style={{textAlign:'left'}}>Ignite your ideas with Lumino lamp</h1>
<div className='btn btn-success'>
Get It
</div>
        
            <img className='mainphoto' src={first}></img>
            </div>
            <div className='row container'>
            <div className='col-6'>
                    <img className="right-photo" src={second}></img>
                </div>
                <div className='col-6'>
                    <p style={{textAlign:'left', paddingTop: '120px'}}>
                        <b>Your Child will learn</b>  The basic concepts<br/>  of electronics and mechanical joints <br/>by creating thier own table lamp.
                    </p>
                </div>
              
                

            </div>

            <div className='row container' >
            <div className='col-12 '>
                <img className='photo2' src={three}></img>

            </div>
                {/* <div className='col-12' style={{textAlign:'left'}}> 
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div> */}
                
            </div>

            {/* <div className=' photo2'>
                <img src={photo2}></img>

            </div> */}
            <div className='row  bacImg' id='bg'>
                <div className='col-5 '>
                    <img  className="photo3" src={tredmill}></img>
                </div>
                <div className='col-7' style={{textAlign:'left', paddingTop:'120px', important: true}}>
                    <p>
                    <b>Lorem Ipsum is simply dummy text of the </b>printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div className='buy'>
            <button className='button' >Buy it today</button>
            <p>Get flat 20% off today</p>
            </div>
        </>
    )
}

export default Content