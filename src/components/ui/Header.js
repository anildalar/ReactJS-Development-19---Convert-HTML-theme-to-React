import React from 'react'

export default function Header() {
  return (
        <>
            <div id="loading-overlay" />
            <div id="loading">
                <span>Loading...</span>
            </div>
            <div id="lock-screen" title="Screen Locked">
                <a href="/" className="header right button grey flat">Logout</a>
                <p>Due to the inactivity of this session, your account was temporarily locked.</p>
                <p>To unlock your account, simply slide the button and enter your password.</p>
                <div className="actions">
                <div id="slide_to_unlock">
                    <img src="img/elements/slide-unlock/lock-slider.png" alt="slide me" />
                    <span>slide to unlock</span>
                </div>
                <form action="#" method="GET">
                    <input type="password" name="pwd" id="pwd" placeholder="Enter your password here..." autoCorrect="off" autoCapitalize="off" /> <input type="submit" name="send" defaultValue="Unlock" disabled /> <input type="reset" defaultValue="X" />
                </form>
                </div>{/* End of .actions */}
            </div>
            <div id="settings" className="settings-content" data-width={450}>
                <ul className="tabs center-elements">
                <li><a href="#settings-1"><img src="img/icons/packs/fugue/24x24/user-business.png" alt /><span>Account Settings</span></a></li>
                <li><a href="#settings-2"><img src="img/icons/packs/fugue/24x24/balloon.png" alt /><span>Notifications</span></a></li>
                <li><a href="#settings-3"><img src="img/icons/packs/fugue/24x24/credit-card.png" alt /><span>Invoicing</span></a></li>
                </ul>
                <div className="change_password">
                <form action="#" method="GET" className="validate" id="settings_password">
                    <p>
                    <label htmlFor="settings-password">New Password:</label> <input type="password" id="settings-password" className="required strongpw small password meter" />
                    </p>
                </form>
                <div className="actions">
                    <div className="right">
                    <input form="settings_password" type="reset" defaultValue="Cancel" className="grey" />
                    <input form="settings_password" type="submit" defaultValue="OK" />
                    </div>
                </div>
                </div>{/* End of .change_password */}
                <div className="content">
                <div id="settings-1">
                    <form action="#" method="GET">
                    <p>
                        <label htmlFor="settings-name">Name:</label> <input type="text" id="settings-name" className="medium" />
                    </p>
                    <p>
                        <label htmlFor="settings-descr">Descripton:</label> <input type="text" id="settings-descr" className="medium" />
                    </p>
                    <p className="divider" />
                    <p>
                        <label htmlFor="settings-pw">Password: </label> <input className="grey change_password_button" type="button" id="settings-pw" defaultValue="Change Password..." data-lang-changed="Password changed" />
                    </p>
                    </form></div>{/* End of #settings-1 */}
                <div id="settings-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    <div className="spacer" />
                    <p className="divider" />
                    <div className="spacer" />
                    <p>
                    <label htmlFor="settings-email">Email Address:</label> <input type="text" id="settings-email" className="medium" />
                    </p>
                    <p>
                    <label htmlFor="settings-interval">Interval: </label>
                    <select name="settings-interval" id="settings-interval" data-placeholder="Choose an Interval">
                        <option value />
                        <option value="Never">Never</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                    </p>
                </div>{/* End of #settings-2 */}
                <div id="settings-3">
                    <form action="#" method="GET">
                    <p>
                        <label htmlFor="settings-card-number">Card number:</label> <input type="text" id="settings-card-number" className="medium" />
                    </p>
                    <p>
                        <label htmlFor="settings-cvv">CVV:</label> <input type="text" id="settings-cvv" className="medium" />
                    </p>
                    <p>
                        <label htmlFor="settings-expiration">Expiration: </label>
                        <select sname="settings-expiration" id="settings-expiration" data-placeholder="Choose an Expiration">
                        <option value />
                        <option value={2012}>2012</option>
                        <option value={2013}>2013</option>
                        <option value={2014}>2014</option>
                        <option value={2015}>2015</option>
                        </select>
                    </p>
                    </form>
                </div>{/* End of #settings-3 */}
                </div>{/* End of .content */}
                <div className="actions">
                <div className="left">
                    <button className="grey cancel">Cancel</button>
                </div>
                <div className="right">
                    <button className="save">Save</button>
                    <button className="hide saving" disabled>Saving...</button>
                </div>
                </div>{/* End of .actions */}
            </div>
            <div style={{display: 'none'}} id="dialog_add_client" title="Add Client Example Dialog">
                <form action className="full validate">
                <div className="row">
                    <label htmlFor="d2_username">
                    <strong>Username</strong>
                    </label>
                    <div>
                    <input className="required" type="text" name="d2_username" id="d2_username" />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="d2_email">
                    <strong>Email Address</strong>
                    </label>
                    <div>
                    <input className="required" type="text" name="d2_email" id="d2_email" />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="d2_role">
                    <strong>Role</strong>
                    </label>
                    <div>
                    <select name="d2_role" id="d2_role" className="search required" data-placeholder="Choose a Role">
                        <option value />
                        <option value="Applicant">Applicant</option>
                        <option value="Member">Member</option>
                        <option value="Moderator">Moderator</option>
                        <option value="Administrator">Administrator</option>
                    </select>
                    </div>
                </div>
                </form>
                <div className="actions">
                <div className="left">
                    <button className="grey cancel">Cancel</button>
                </div>
                <div className="right">
                    <button className="submit">Add User</button>
                </div>
                </div>
            </div>
            <div style={{display: 'none'}} id="dialog_message" title="Conversation: John Doe">
                <div className="spacer" />
                <div className="messages full chat">
                <div className="msg reply">
                    <img src="img/icons/packs/iconsweets2/25x25/user-2.png" />
                    <div className="content">
                    <h3><a href="pages_profile.html">John Doe</a> <span>says:</span><small>3 hours ago</small></h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>
                <div className="msg">
                    <img src="img/icons/packs/iconsweets2/25x25/user-2.png" />
                    <div className="content">
                    <h3><a href="pages_profile.html">Peter Doe</a> <span>says:</span><small>5 hours ago</small></h3>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                </div>{/* End of .messages */}
                <div className="actions">
                <div className="left">
                    <input style={{width: 320}} type="text" name="d3_message" id="d3_message" placeholder="Type your message..." />
                </div>
                <div className="right">
                    <button>Send</button>
                    <button className="grey">Cancel</button>
                </div>
                </div>{/* End of .actions */}
            </div>
            <section id="toolbar">
                <div className="container_12">
                {/* Left side */}
                <div className="left">
                    <ul className="breadcrumb">
                    <li><a href="dashboard.html">Mango</a></li>
                    <li><a href="#">Dashboard</a></li>
                    </ul>
                </div>
                {/* End of .left */}
                {/* Right side */}
                <div className="right">
                    <ul>
                    <li><a href="pages_profile.html"><span className="icon i14_admin-user" />Profile</a></li>
                    <li>
                        <a href="#"><span>3</span>Messages</a>
                        {/* Mail popup */}
                        <div className="popup">
                        <h3>New Messages</h3>
                        {/* Button bar */}
                        <a className="button flat left grey" onclick="$(this).parent().fadeToggle($$.config.fxSpeed)">Close</a>
                        <a className="button flat right" href="tables_dynamic.html">Inbox</a>
                        {/* The mail content */}
                        <div className="content mail">
                            <ul>
                            <li>
                                <div className="avatar">
                                <img src="img/elements/mail/avatar.png" height={40} width="40/" />
                                </div>
                                <div className="info">
                                <strong>John Doe</strong>
                                <span>Thanks for your theme!</span>
                                <small>09:32 am</small>
                                </div>
                                <div className="text">
                                <p>Hey Admin!</p>
                                <p>I've purchased your admin template and it's great :)</p>
                                <p>A happy customer</p>
                                <div className="actions">
                                    <a href="#" className="left open-message-dialog">Reply</a>
                                    <a onclick="$(this).parent().parent().parent().slideToggle($$.config.fxSpeed)" className="red right" href="#">Delete</a>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="avatar">
                                <img src="img/elements/mail/mail.png" height={40} width="40/" />
                                </div>
                                <div className="info">
                                <strong>System</strong>
                                <span>New comment</span>
                                <small>08:47 am</small>
                                </div>
                                <div className="text">
                                <p>Hello,</p>
                                <p>There is one new comment on your theme.</p>
                                <p>Go to Comments page to see it.</p>
                                <div className="actions">
                                    <a href="#" className="left open-message-dialog">Reply</a>
                                    <a onclick="$(this).parent().parent().parent().slideToggle($$.config.fxSpeed)" className="red right" href="#">Delete</a>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="avatar">
                                <img src="img/elements/mail/mail.png" height={40} width="40/" />
                                </div>
                                <div className="info">
                                <strong>Stranger</strong>
                                <span>[SPAM] ---</span>
                                <small>Yesterday</small>
                                </div>
                                <div className="text">
                                <p>[...]</p>
                                <div className="actions">
                                    <a href="#" className="left open-message-dialog">Read</a>
                                    <a onclick="$(this).parent().parent().parent().slideToggle($$.config.fxSpeed)" className="red right" href="#">Delete</a>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>{/* End of .contents */}
                        </div>{/* End of .popup */}
                    </li>{/* End of li */}
                    <li className="space" />
                    <li><a href="#" id="btn-lock"><span>--:--</span>Lock screen</a></li>
                    <li className="red"><a href="/">Logout</a></li>
                    </ul>
                </div>{/* End of .right */}
                {/* Phone only items */}
                <div className="phone">
                    {/* User Link */}
                    <li><a href="pages_profile.html"><span className="icon icon-user" /></a></li>
                    {/* Navigation */}
                    <li><a className="navigation" href="#"><span className="icon icon-list" /></a></li>
                </div>{/* End of phone items */}
                </div>{/* End of .container_12 */}
            </section>
            <header className="container_12">
                {/* Your logos */}
                <a href="dashboard.html"><img src="img/logo.png" alt="Mango" width={191} height={60} /></a>
                <a className="phone-title" href="dashboard.html"><img src="img/logo-mobile.png" alt="Mango" height={22} width={70} /></a>
                <div className="buttons">
                <a href="statistics.html">
                    <span className="icon icon-sitemap" />
                    Statistics
                </a>
                <a href="forms.html">
                    <span className="icon icon-list-alt" />
                    Forms
                </a>
                <a href="tables_dynamic.html">
                    <span className="icon icon-table" />
                    Tables
                </a>
                </div>{/* End of .buttons */}
            </header>
        </>
  )
}
