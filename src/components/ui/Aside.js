import React from 'react'
import { Link } from 'react-router-dom'

export default function Aside() {
    return (
        <aside>
            <div className="top">
                {/* Navigation */}
                <nav><ul className="collapsible accordion">
                    <li className="current"><a href="dashboard.html"><img src="img/icons/packs/fugue/16x16/dashboard.png" alt height={16} width={16} />Dashboard</a></li>
                    <li>
                    <a href="#"><img src="img/icons/packs/fugue/16x16/ui-layered-pane.png" alt height={16} width={16} />UI Widgets<span className="badge">4</span></a>
                    <ul>
                        <li><a href="ui_general.html"><span className="icon icon-list" />General</a></li>
                        <li><a href="ui_extras.html"><span className="icon icon-cog" />Extras</a></li>
                        <li><a href="ui_icons.html"><span className="icon icon-picture" />Icons</a></li>
                        <li><a href="ui_grid.html"><span className="icon icon-th" />Grid</a></li>
                    </ul>
                    </li>
                    <li>
                    <Link to="/forms"><img src="img/icons/packs/fugue/16x16/application-form.png" alt height={16} width={16} />Form Elements</Link>
                    <ul>
                        <li><a href="forms.html"><span className="icon icon-list-alt" />General</a></li>
                        <li><a href="forms_validation.html"><span className="icon icon-warning-sign" />Validation</a></li>
                        <li><a href="forms_extras.html"><span className="icon icon-magic" />Fileuploader &amp; Wizard</a></li>
                    </ul>
                    </li>
                    <li>
                    <a href="#"><img src="img/icons/packs/fugue/16x16/chart.png" alt height={16} width={16} />Statistics / Charts<span className="badge">2</span></a>
                    <ul>
                        <li><a href="statistics.html"><span className="icon icon-sitemap" />Statistics Elements</a></li>
                        <li><a href="charts.html"><span className="icon icon-bar-chart" />Charts</a></li>
                    </ul>
                    </li>
                    <li>
                    <a href="#"><img src="img/icons/packs/fugue/16x16/table.png" alt height={16} width={16} />Tables</a>
                    <ul>
                        <li><a href="tables_static.html"><span className="icon icon-check-empty" />Static</a></li>
                        <li><a href="tables_dynamic.html"><span className="icon icon-table" />Dynamic</a></li>
                        <li><a href="tables_full.html"><span className="icon icon-fullscreen" />Full</a></li>
                    </ul>
                    </li>
                    <li>
                    <a href="#"><img src="img/icons/packs/fugue/16x16/document-horizontal.png" alt height={16} width={16} />Other Pages</a>
                    <ul>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="pages_profile.html">Profile</a></li>
                        <li><a href="pages_invoice.html">Invoice<span className="badge grey">1 open</span></a></li>
                        <li><a href="pages_faq.html">FAQ</a></li>
                        <li><a href="pages_search.html">Search</a></li>
                        <li><a href="pages_error_404.html">Error Page (404)</a></li>
                    </ul>
                    </li>
                </ul></nav>{/* End of nav */}
            </div>{/* End of .top */}
            <div className="bottom sticky">
                <div className="divider" />
                <div className="progress">
                <div className="bar" data-title="Space" data-value={1285} data-max={5120} data-format="0,0 MB" />
                <div className="bar" data-title="Traffic" data-value="8.61" data-max={14} data-format="0.00 GB" />
                <div className="bar" data-title="Budget" data-value={20000} data-max={20000} data-format="$0,0" />
                </div>
                <div className="divider" />
                <div className="buttons">
                <a href="#" className="button grey open-add-client-dialog">Add New Client</a>
                <a href="#" className="button grey open-add-client-dialog">Open a Ticket</a>
                </div>
            </div>{/* End of .bottom */}
        </aside>
    )
}
