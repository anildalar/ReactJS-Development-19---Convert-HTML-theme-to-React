import React from 'react'

export default function Toolbar() {
  return (
    <>
        <section className="toolbar">
            <div className="user">
                <div className="avatar">
                <img src="img/layout/content/toolbar/user/avatar.png" />
                <span>3</span>
                </div>
                <span>Administrator</span>
                <ul>
                <li><a href="javascript:$$.settings();">Settings</a></li>
                <li><a href="pages_profile.html">Profile</a></li>
                <li className="line" />
                <li><a href="login.html">Logout</a></li>
                </ul>
            </div>
            <ul className="shortcuts">
                <li>
                <a href="#"><span className="icon i24_user-business" /></a>
                {/* Possible sizes: small/medium/large */}
                <div className="small">
                    <h3>Create a User</h3>
                    {/* Button bar */}
                    <button className="button flat left grey" onclick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Close</button>
                    <button className="button flat right" onclick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Create</button>
                    <div className="content">
                    <form className="full grid">
                        <div className="row no-bg">
                        <p className="_100 small">
                            <label htmlFor="p1_username">Username</label>
                            <input type="text" name="p1_username" id="p1_username" />
                        </p>
                        </div>
                        <div className="row no-bg">
                        <p className="_50 small">
                            <label htmlFor="p1_firstname">Firstname</label>
                            <input type="text" name="p1_firstname" id="p1_firstname" />
                        </p>
                        <p className="_50 small">
                            <label htmlFor="p1_lastname">Lastname</label>
                            <input type="text" name="p1_lastname" id="p1_lastname" />
                        </p>
                        </div>
                    </form>
                    </div>
                </div>{/* End of popup */}
                </li>
                <li>
                <a href="#"><span className="icon i24_inbox-document" /></a>
                {/* Possible sizes: small/medium/large */}
                <div className="small">
                    <h3>Write a Message</h3>
                    {/* Button bar */}
                    <button className="button flat left grey" onclick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Close</button>
                    <button className="button flat right" onclick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Send</button>
                    <div className="content">
                    <form className="full grid">
                        <div className="row no-bg">
                        <p className="_100 small">
                            <input type="text" name="p2_recipient" id="p2_recipient" placeholder="Recipient" />
                        </p>
                        <p className="_100 small">
                            <input type="text" name="p2_subject" id="p2_subject" placeholder="Subject" />
                        </p>
                        <p className="_100 small">
                            <textarea rows={3} className="full-width" name="p2_message" id="p2_message" placeholder="Message" defaultValue={""} />
                        </p>
                        </div>
                    </form>
                    </div>
                </div>{/* End of popup */}
                </li>
                <li>
                <a href="#"><span className="icon i24_calendar" /></a>
                {/* Possible sizes: small/medium/large */}
                <div className="small">
                    <h3>Write a Message</h3>
                    {/* Button bar */}
                    <button className="button flat left grey" onclick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Close</button>
                    <button className="button flat right" onclick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Send</button>
                    <div className="content">
                    <form className="full grid">
                        <div className="row no-bg">
                        <p className="_100 small">
                            <label htmlFor="p3_recipient" className="inline">Recipent</label>
                            <input type="text" name="p3_recipient" id="p3_recipient" />
                        </p>
                        <p className="_100 small">
                            <label htmlFor="p3_subject" className="inline">Subject</label>
                            <input type="text" name="p3_subject" id="p3_subject" />
                        </p>
                        <p className="_100 small">
                            <label htmlFor="p3_message">Message</label>
                            <textarea rows={3} className="full-width" name="p3_message" id="p3_message" defaultValue={""} />
                        </p>
                        </div>
                    </form>
                    </div>
                </div>{/* End of popup */}
                </li>
                <li>
                <a href="#"><span className="icon i24_application-blue" /></a>
                {/* Possible sizes: small/medium/large */}
                <div className="small">
                    <h3>Information</h3>
                    {/* Button bar */}
                    <button className="button flat left grey" onclick="$(this).parent().fadeToggle($$.config.fxSpeed).parent().removeClass('active')">Close</button>
                    <div className="content">
                    <form className="full grid">
                        <div className="row no-bg">
                        <p className="_100 small">
                            <label htmlFor="p3_recipient">Priority</label>
                            <select name="p4_priority" id="p4_priority">
                            <option value={0}>low</option>
                            <option value={1}>medium</option>
                            <option value={2}>high</option>
                            </select>
                        </p>
                        <p className="_100 small">
                            <textarea rows={3} className="full-width" name="p4_question" id="p4_question" placeholder="Question" defaultValue={""} />
                        </p>
                        </div>
                    </form>
                    </div>
                </div>{/* End of popup */}
                </li>
            </ul>{/* End of .shortcuts */}
            <input type="search" data-source="extras/search.php" placeholder="Search..." autoComplete="off" className="tooltip" title="e.g. Peach" data-gravity="s" />
        </section>
    </>
  )
}
