import React, { useEffect, useState ,useLayoutEffect } from "react";
import PageTop from '../templates/PageTop.js'

import {sendFormData,getPostById} from '../../utilts/Models.js';

import {AppendScript,AppendStyle} from '../../utilts/Append.js';

import {TranslateList} from '../../../src/App.js';

export default function Contact() {
  useEffect(() => {

    AppendStyle('contact');

    getPostById(17).then((res) => {
        setMapData(res.data.metas.map)
    })


    AppendScript('true', 'assets/js/map.js');


}, []);

  useLayoutEffect(() => {
    AppendScript(true, 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD7TypZFTl4Z3gVtikNOdGSfNTpnmq-ahQ&callback=initMap&language=az');

}, [])


  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [mapData, setMapData] = useState({});

  const tr_list = React.useContext(TranslateList);



  const sendMessage= (e)=>{
    e.preventDefault();

    if (first_name && last_name && message && tel && email) {
      setShowError(false);

      sendFormData(
        {
          contact_form:true,
          title:first_name+' '+last_name,
          'meta[1]':email,
          'meta[2]':tel,
          content : message

        }
      ).then((res)=>{
          setFirst_name('');
          setLast_name('');
          setMessage('');
          setTel('');

          document.getElementById('contact_form').reset();

          alert('Mesajiniz ugurla gonderildi');
      } )




    }else{
     setShowError(true)
    }
  
  }

  const setState =(function_name,e)=>{
      function_name(e.target.value);
  }


  

  return (
    <>
     <PageTop id='17' />

      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="info-detail">
                <i className="fas fa-mobile-alt"></i>
                <p>+1 323-913-4688</p>
                <p>+1 323-888-4554</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="info-detail">
                <i className="fas fa-map-marker-alt"></i>
                <p>4730 Crystal Springs Dr, Los Angeles, CA 90027</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="info-detail">
                <i className="far fa-envelope-open"></i>
                <p>mail@demolink.org</p>
                <p>info@demolink.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contactForm">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  col-md-6">
              <div className="contact-map">
               {/*  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97267.1134908569!2d49.9515392!3d40.3734528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1616403724772!5m2!1sen!2s"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe> */}
                  <div id='map'  className='map_box'  data-zoom={mapData.zoom}  data-latitude={mapData.lat}  data-longitude={mapData.lon}  data-icon='assets/images/map-marker.png' data-title='Baki' > 

                  </div>

              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact-form">
                <h5>Contact Form</h5>
                <form onSubmit={sendMessage.bind(this)}  id='contact_form' >
                  <input
                    type="text"
                    className="fullname"
                    placeholder={tr_list.adiniz}
                    onKeyUp={setState.bind(this,setFirst_name)}
                  />
                   {
                    (showError && !first_name) && <span> {tr_list.error_msg}</span>
                  }
                  <input
                    type="text"
                    className="fullname"
                    placeholder={tr_list.soy_adiniz}
                    onKeyUp={setState.bind(this,setLast_name)}
                  />

                   {
                    (showError && !last_name) && <span> {tr_list.error_msg}</span>
                  }
                  <input
                    type="email"
                    className="email"
                    placeholder={tr_list.email}
                    onKeyUp={setState.bind(this,setEmail)}
                  />

                    {
                    (showError && !email) && <span> {tr_list.error_msg}</span>
                  }

                   <input
                    type="tel"
                    className="email"
                    placeholder={tr_list.tel}
                    onKeyUp={setState.bind(this,setTel)}
                  />

                    {
                    (showError && !tel) && <span>{tr_list.error_msg}</span>
                  }
                  <textarea
                    name=""
                    id=""
                    cols="25"
                    rows="10"
                    placeholder={tr_list.message}
                    onKeyUp={setState.bind(this,setMessage)}
                  ></textarea>
                    {
                    (showError && !message) && <span> {tr_list.error_msg}</span>
                  }
                  <button className='submit_btn' type='submit' > 
                      <span>{tr_list.gonder}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
