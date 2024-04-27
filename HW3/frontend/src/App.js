import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import User from "./components/User";
import UserForm from "./components/UserForm";
import AlertMessage from "./components/AlertMessage";

function App() {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/user")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Received data:", data);
        setUsers(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error.message);
        setMsg("Error: Unable to fetch users.");
      });
  }, [msg]);
  


  return (
  <div>
    <div className="container">
      <div className="heading">
        <h1>Moving the 489 lecture to the evening</h1>
    </div>
    <div className = "img_donation row row-cols-2">
        <div className="col-6">
        <div className="hero">
        <img src="/images/hero.jpg"  style={{ maxWidth: '100%', height: 'auto', width: 'auto' }} />
        <div className="img_info">
            <div className="row row-cols-2">
                <div className="col-3">
                    started 
                    <br></br>
                    Petition to
                </div>
                <div className="col-9">
                    February 12
                    <br></br>
                    <a href="https://wsu.instructure.com/courses/1688342/assignments/9096454"> WSU CPT_S 489</a>
                </div>
            </div>
            <div className="row">
                <h5> Supporter Voices</h5>
            </div>
            <div className="row">
                <img src="/images/supporters.png" style={{ maxWidth: '100%', height: 'auto', width: 'auto' }} />
            </div>
            <div className="row">
                <h5>Why this petition matters</h5>
            </div>
            <div className="row">
                <img src="/images/avatar.png" style={{ maxWidth: '100%', height: 'auto', width: 'auto' }} />
                <div className="started">
                    Started by <a href="https://www.change.org/login_or_join?redirectTo=%2Fu%2F1250361767">Adam Wagener</a>
                </div>
            </div>
            <div className="paragraph">
                We, the undersigned members of the CPTS 489 course community, respectfully request the consideration of moving the className schedule from its current 8 AM time slot to the evening hours. As committed students passionate about our academic pursuits, we believe that relocating the course to the evening will facilitate greater attendance and participation among our peers. The early morning timing poses significant challenges for many students, including those with long commutes, work commitments, or other academic obligations, limiting their ability to fully engage with the course material and contribute meaningfully to className discussions.
    
            </div>
            <div className="paragraph">
                By moving CPTS 489 to the evening, we aim to foster a more inclusive and accessible learning environment that accommodates the diverse needs and schedules of our student body. This adjustment would not only enhance the overall learning experience but also promote student success and academic excellence within the program. We urge the administration and relevant stakeholders to consider our petition and collaborate with the student body to implement this change, thereby ensuring that every student has the opportunity to thrive and excel in their educational endeavors.
    
            </div>
            <div>
                <img src="/images/qr.png" style={{ maxWidth: '100%', height: 'auto', width: 'auto' }} />
                <a href="https://www.change.org/p/mandate-the-availability-of-epipens-in-all-public-buildings?source_location=petitions_browse"></a>Download this QR code to help others easily find and sign the petition.
            </div>
    
            <section id="user-details">
              <div className="container-lg">
                <div className="p-lg-2 text-center bg-light">
                  <h1>All Signers</h1>
                  {users.map((user) => {
                    return (
                      <User
                        user={user}
                        setUser={setUsers}
                        setMsg={setMsg}
                        key={user.email}
                      />
                    );
                  })}
                </div>
              </div>
            </section>
    
        </div>
        </div>
    </div>
    <div className="col-6">
        <div className="donation">
            <div className="goal">
                <img src="/images/signed.png"/>
            </div>
            <UserForm setUsers={setUsers} setMsg={setMsg} />
            {msg.length > 0 && <AlertMessage msg={msg} setMsg={setMsg} />}
                        <br></br>
                        <div className="col-4">
                        <div className="box_full">
                            <div>
                                Pullman, 99163
                            </div>
                            <div>
                                United States
                            </div>
                        </div>
                        </div>
            </div>
        </div>
    
    </div>
    </div>
  </div>
  );
}

export default App;
