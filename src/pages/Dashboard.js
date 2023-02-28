
//1. Import area
import React from 'react'

//2. Defination Area
let Dashboard = (props)=> {
  return (
    <>
        <section id="content" className="container_12 clearfix" data-sort="true">
            <ul className="stats not-on-phone">
                <li>
                <strong>61263</strong>
                <small>Total Visits</small>
                <span className="green">+26%</span>
                </li>
                <li>
                <strong>23</strong>
                <small>Orders</small>
                <span className="green">+16%</span>
                </li>
                <li>
                <strong>$2165.57</strong>
                <small>Total Volume</small>
                <span className="red">-8%</span>
                </li>
                <li>
                <strong>0</strong>
                <small>Overdue Tickets</small>
                <span>0%</span>
                </li>
                <li>
                <strong>7</strong>
                <small>Reported Bugs</small>
                <span className="red">+17%</span>
                </li>
            </ul>{/* End of ul.stats */}
            <h1 className="grid_12 margin-top no-margin-top-phone">Dashboard</h1>
            <div className="grid_12 center-elements">
                <div className="full-stats">
                <div className="stat minichart" data-total={16525} data-values="[4,6,7,7,4,3,2,1,4]" data-title="Visits" data-format="+0,0;-0,0" data-change={22} />
                </div>
                <div className="full-stats">
                <div className="stat minichart" data-total={-17} data-values="[2,5,8,7,3,0,-1,-2,-4]" data-title="Users" data-format="+0,0;-0,0" data-change={-6} />
                </div>
                <div className="full-stats">
                <div className="stat minichart" data-total={0} data-values="[0,0,0,1,2,1,-2,-2,-1]" data-title="Orders" data-change={0} />
                </div>
            </div>
            <div className="grid_12">
                <div className="box">
                <div className="header">
                    <h2><img className="icon" src="img/icons/packs/fugue/16x16/chart-up-color.png" />Charts</h2>
                    <a href="#" className="menu icon-cog" />
                    <menu>
                    <a href="#" className="open-add-client-dialog"><span className="icon icon-plus" />Add Client</a>
                    <a href="#"><div className="icon icon-pencil" />Edit</a>
                    <a href="#"><div className="icon icon-remove" />Remove</a>
                    </menu>
                </div>
                <div className="content" style={{height: 250}}>
                    <table className="chart">
                    <thead>
                        <tr>
                        <th />
                        <th>Label 1</th>
                        <th>Label 2</th>
                        <th>Label 3</th>
                        <th>Label 4</th>
                        <th>Label 5</th>
                        <th>Label 6</th>
                        <th>Label 7</th>
                        <th>Label 8</th>
                        <th>Label 9</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>First Label</th>
                        <td>48</td>
                        <td>125</td>
                        <td>159</td>
                        <td>147</td>
                        <td>154</td>
                        <td>114</td>
                        <td>163</td>
                        <td>122</td>
                        <td>96</td>
                        </tr>
                        <tr>
                        <th>Second Label</th>
                        <td>8</td>
                        <td>27</td>
                        <td>0</td>
                        <td>79</td>
                        <td>47</td>
                        <td>59</td>
                        <td>80</td>
                        <td>30</td>
                        <td>70</td>
                        </tr>
                        <tr>
                        <th>Third Label</th>
                        <td>28</td>
                        <td>56</td>
                        <td>98</td>
                        <td>112</td>
                        <td>87</td>
                        <td>26</td>
                        <td>38</td>
                        <td>110</td>
                        <td>20</td>
                        </tr>
                        <tr>
                        <th>Fourth Label</th>
                        <td>38</td>
                        <td>43</td>
                        <td>69</td>
                        <td>54</td>
                        <td>16</td>
                        <td>16</td>
                        <td>202</td>
                        <td>20</td>
                        <td>73</td>
                        </tr>
                    </tbody>	
                    </table>
                </div>{/* End of .content */}
                </div>{/* End of .box */}
            </div>{/* End of .grid_12 */}
            <div className="grid_6">
                <div className="box">
                <div className="header">
                    <h2><img className="icon" src="img/icons/packs/fugue/16x16/receipt-invoice.png" />Invoices statistics</h2>
                </div>
                <div className="content">
                    <div className="spacer" />
                    <div className="full-stats">
                    <div className="stat hlist" data-list="[{&quot;val&quot;:17621,&quot;format&quot;:&quot;$0,0;-$0,0&quot;,&quot;title&quot;:&quot;already paid&quot;,&quot;color&quot;:&quot;green&quot;},{&quot;val&quot;:1125,&quot;format&quot;:&quot;$0,0;-$0,0&quot;,&quot;title&quot;:&quot;not paid yet&quot;,&quot;color&quot;:&quot;red&quot;},{&quot;val&quot;:18746,&quot;format&quot;:&quot;$0,0;-$0,0&quot;,&quot;title&quot;:&quot;total taxes&quot;}]" data-flexiwidth="true" />
                    </div>
                    <div className="clearfix" />
                    <div className="ui-progressbar" data-value={90} data-showtitle="percentage" data-color="blue" data-showvalue="true" />
                </div>{/* End of .content */}
                <div className="actions">
                    <div className="left">
                    <a href="#" className="button grey">Print invoices</a>
                    </div>
                    <div className="right">
                    <a href="#" className="button">Generate report</a>
                    </div>
                </div>{/* End of .actions */}
                </div>{/* End of .box */}
                <form className="box validate">
                <div className="header">
                    <h2><img className="icon" src="img/icons/packs/fugue/16x16/newspaper.png" />Messages</h2>
                </div>
                <div className="content">
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
                    </div>
                </div>{/* End of .content */}
                <div className="actions">
                    <div className="left">
                    <label htmlFor="fb_pin" className="inline">Message to John Doe:</label>
                    <input type="text" className="required" name="fb_pin" id="fb_pin" />
                    </div>
                    <div className="right">
                    <input type="reset" defaultValue="Cancel" className="grey" />
                    <input type="submit" defaultValue="Send" name="send" />
                    </div>
                </div>{/* End of .actions */}
                </form>{/* End of .box */}
            </div>{/* End of .grid_6 */}
            <div className="grid_6">
                <div className="box">
                <div className="header">
                    <h2><img className="icon" src="img/icons/packs/fugue/16x16/calendar-select.png" />Calendar</h2>
                </div>
                <div className="content calendar demo" />
                </div>
            </div>{/* End of .grid_6 */}
            <div className="grid_12">
                <div className="box">
                <div className="header">
                    <h2><img className="icon" src="img/icons/packs/fugue/16x16/table.png" />Table</h2>
                </div>
                <div className="content">
                    <div className="tabletools">
                    <div className="left">
                        <a className="open-add-client-dialog" href="#"><i className="icon-plus" />New Client</a>
                    </div>
                    <div className="right">								
                    </div>
                    </div>
                    <table className="dynamic styled" data-table-tools="{&quot;display&quot;:true}"> {/* OPTIONAL: with-prev-next */}
                    <thead>
                        <tr>
                        <th>Rendering engine</th>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                        <th>CSS grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="gradeX">
                        <td>Trident</td>
                        <td>Internet
                            Explorer 4.0</td>
                        <td>Win 95+</td>
                        <td className="center">4</td>
                        <td className="center">X</td>
                        </tr>
                        <tr className="gradeC">
                        <td>Trident</td>
                        <td>Internet
                            Explorer 5.0</td>
                        <td>Win 95+</td>
                        <td className="center">5</td>
                        <td className="center">C</td>
                        </tr>
                        <tr className="gradeA">
                        <td>Trident</td>
                        <td>Internet
                            Explorer 5.5</td>
                        <td>Win 95+</td>
                        <td className="center">5.5</td>
                        <td className="center">A</td>
                        </tr>
                        <tr className="gradeA">
                        <td>Trident</td>
                        <td>Internet
                            Explorer 6</td>
                        <td>Win 98+</td>
                        <td className="center">6</td>
                        <td className="center">A</td>
                        </tr>
                        <tr className="gradeA">
                        <td>Trident</td>
                        <td>Internet Explorer 7</td>
                        <td>Win XP SP2+</td>
                        <td className="center">7</td>
                        <td className="center">A</td>
                        </tr>
                        <tr className="gradeA">
                        <td>Trident</td>
                        <td>AOL browser (AOL desktop)</td>
                        <td>Win XP</td>
                        <td className="center">6</td>
                        <td className="center">A</td>
                        </tr>
                        <tr className="gradeA">
                        <td>Gecko</td>
                        <td>Firefox 1.0</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td className="center">1.7</td>
                        <td className="center">A</td>
                        </tr>
                        <tr className="gradeA">
                        <td>Gecko</td>
                        <td>Firefox 1.5</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td className="center">1.8</td>
                        <td className="center">A</td>
                        </tr>
                        <tr className="gradeA">
                        <td>Gecko</td>
                        <td>Firefox 2.0</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td className="center">1.8</td>
                        <td className="center">A</td>
                        </tr>
                        <tr className="gradeA">
                        <td>Gecko</td>
                        <td>Firefox 3.0</td>
                        <td>Win 2k+ / OSX.3+</td>
                        <td className="center">1.9</td>
                        <td className="center">A</td>
                        </tr>
                        <tr className="gradeA">
                        <td>Gecko</td>
                        <td>Camino 1.0</td>
                        <td>OSX.2+</td>
                        <td className="center">1.8</td>
                        <td className="center">A</td>
                        </tr>
                    </tbody>
                    </table>
                </div>{/* End of .content */}
                </div>{/* End of .box */}
            </div>{/* End of .grid_12 */}
        </section>
    </>
  )
}


//3. Export area
export default Dashboard;