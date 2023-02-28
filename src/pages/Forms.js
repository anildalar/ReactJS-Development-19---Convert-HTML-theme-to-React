import React from 'react'

let Forms = props =>{
  return (
    <>
      <section id="content" className="container_12 clearfix" data-sort="true">
        <h1 className="grid_12">Form Elements</h1>
        <form action className="grid_12">
          <fieldset>
            <legend>Input Fields</legend>
            <div className="row">
              <label htmlFor="f1_normal_input">
                <strong>Normal Input Field</strong>
              </label>
              <div>
                <input type="text" name="f1_normal_input" id="f1_normal_input" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f1_password">
                <strong>Password Field</strong>
                <small>with tooltip</small>
              </label>
              <div>
                <input type="password" className="tooltip" data-gravity="n" title="Please use a secure password!" name="f1_password" id="f1_password" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f1_placeholder">
                <strong>With Placeholder</strong>
              </label>
              <div>
                <input type="text" placeholder="Hey, this is a placeholder!" name="f1_placeholder" id="f1_placeholder" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f1_disabled">
                <strong>Disabled Field</strong>
              </label>
              <div>
                <input type="text" disabled name="f1_disabled" id="f1_disabled" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f1_value">
                <strong>Predefined value</strong>
              </label>
              <div>
                <input type="text" defaultValue="http://" name="f1_value" id="f1_value" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f1_textarea">
                <strong>Textarea</strong>
              </label>
              <div>
                <textarea className="nogrow" rows={5} name="f1_textarea" id="f1_textarea" defaultValue={" "} />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f1_textarea_grow">
                <strong>Textarea</strong>
                <small>with autogrow</small>
              </label>
              <div>
                <textarea rows={5} name="f1_textarea_grow" id="f1_textarea_grow" defaultValue={""} />
              </div>
            </div>
            <div className="row not-on-phone">
              <label htmlFor="f1_wysiwyg">
                <strong>WYSIWYG</strong>
                <small>(W)hat (y)ou (s)ee (i)s (w)hat (y)ou (g)et</small>
              </label>
              <div>
                <textarea className="editor" name="f1_wysiwyg" id="f1_wysiwyg" defaultValue={""} />
              </div>
            </div>
          </fieldset>{/* End of fieldset */}
          <fieldset className="not-on-phone">
            <legend>Select</legend>
            <div className="row">
              <label htmlFor="f2_select1">
                <strong>Select</strong>
                <small>With search</small>
              </label>
              <div>
                <select name="f2_select1" id="f2_select1" className="search" data-placeholder="Choose a Name">
                  <option value />
                  <option value="Oliver">Oliver</option> 
                  <option value="Jack">Jack</option> 
                  <option value="Harry">Harry</option> 
                  <option value="Alfie">Alfie</option> 
                  <option value="Charlie">Charlie</option> 
                  <option value="Thomas">Thomas</option> 
                  <option value="William">William</option> 
                  <option value="Joshua">Joshua</option> 
                  <option value="George">George</option> 
                  <option value="James">James</option> 
                  <option value="Olivia">Olivia</option> 
                  <option value="Sophie">Sophie</option> 
                  <option value="Emily">Emily</option> 
                  <option value="Lily">Lily</option> 
                  <option value="Amelia">Amelia</option> 
                  <option value="Jessica">Jessica</option> 
                  <option value="Ruby">Ruby</option> 
                  <option value="Chloe">Chloe</option> 
                  <option value="Grace">Grace</option> 
                  <option value="Evie">Evie</option> 
                </select>
              </div>
            </div>
            <div className="row">
              <label htmlFor="f2_select2">
                <strong>Select</strong>
                <small>Without search</small>
              </label>
              <div>
                <select name="f2_select2" id="f2_select2" data-placeholder="Choose a Name">
                  <option value="Oliver">Oliver</option> 
                  <option value="Jack">Jack</option> 
                  <option value="Grace">Grace</option> 
                  <option value="Evie">Evie</option> 
                </select>
              </div>
            </div>
            <div className="row">
              <label htmlFor="f2_tags">
                <strong>Tags Select</strong>
              </label>
              <div>
                <select name="f2_tags[]" id="f2_tags" data-placeholder="Choose a Name" multiple>
                  <option value="Oliver">Oliver</option> 
                  <option value="Jack">Jack</option> 
                  <option value="Harry">Harry</option> 
                  <option value="Alfie">Alfie</option> 
                  <option value="Charlie">Charlie</option> 
                  <option value="Thomas">Thomas</option> 
                  <option value="William">William</option> 
                  <option value="Joshua">Joshua</option> 
                  <option value="George">George</option> 
                  <option value="James">James</option> 
                  <option value="Olivia">Olivia</option> 
                  <option value="Sophie">Sophie</option> 
                  <option value="Emily">Emily</option> 
                  <option value="Lily">Lily</option> 
                  <option value="Amelia">Amelia</option> 
                  <option value="Jessica">Jessica</option> 
                  <option value="Ruby">Ruby</option> 
                  <option value="Chloe">Chloe</option> 
                  <option value="Grace">Grace</option> 
                  <option value="Evie">Evie</option> 
                </select>
              </div>
            </div>
            <div className="row">
              <label htmlFor="f2_double">
                <strong>Dual Select</strong>
              </label>
              <div>
                <select multiple className="dualselects" data-size="small" id="f2_double" name="f2_double">
                  <option selected name="Austria">Austria</option>
                  <option name="Belgium">Belgium</option>
                  <option name="Bulgaria">Bulgaria</option>
                  <option name="Cyprus">Cyprus</option>
                  <option name="Czech Republic">Czech Republic</option>
                  <option name="Denmark">Denmark</option>
                  <option name="Estonia">Estonia</option>
                  <option name="Finland">Finland</option>
                  <option selected name="France">France</option>
                  <option selected name="Germany">Germany</option>
                  <option name="Greece">Greece</option>
                  <option name="Hungary">Hungary</option>
                  <option name="Ireland">Ireland</option>
                  <option name="Italy">Italy</option>
                  <option name="Latvia">Latvia</option>
                  <option name="Lithuania">Lithuania</option>
                  <option name="Luxembourg">Luxembourg</option>
                  <option name="Malta">Malta</option>
                  <option name="Netherlands">the Netherlands</option>
                  <option name="Poland">Poland</option>
                  <option name="Portugal">Portugal</option>
                  <option name="Romania">Romania</option>
                  <option name="Slovakia">Slovakia</option>
                  <option name="Slovenia">Slovenia</option>
                  <option name="Spain">Spain</option>
                  <option name="Sweden">Sweden</option>
                  <option selected name="United Kingdom">United Kingdom</option>
                </select>
              </div>
            </div>
          </fieldset>{/* End of fieldset */}
          <fieldset>
            <legend>Picker</legend>
            <div className="row">
              <label htmlFor="f3_date">
                <strong>Datepicker</strong>
              </label>
              <div>
                <input type="date" name="f3_date" id="f3_date" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f3_time">
                <strong>Timepicker</strong>
              </label>
              <div>
                <input type="time" name="f3_time" id="f3_time" data-step-minute={10} />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f3_datepicker">
                <strong>Date-/Timepicker</strong>
              </label>
              <div>
                <input type="datetime" name="f3_datepicker" id="f3_datepicker" defaultValue="11/11/1993 15:15" />
              </div>
            </div>
            <div className="row not-on-phone">
              <label htmlFor="f3_color">
                <strong>Color-Picker</strong>
              </label>
              <div>
                <div>
                  <input type="color" name="f3_color" id="f3_color" />
                </div>
              </div>
            </div>
          </fieldset>{/* End of fieldset */}
          <fieldset>
            <legend>Checkboxes</legend>
            <div className="row">
              <label>
                <strong>Simple Checkbox</strong>
              </label>
              <div>
                <div><input type="checkbox" name="f4_cb" id="f4_cb" /> <label htmlFor="f4_cb">Select it?</label></div>
              </div>
            </div>
            <div className="row">
              <label>
                <strong>Disabled Checkbox</strong>
              </label>
              <div>
                <div><input type="checkbox" disabled name="f4_cb_dis" id="f4_cb_dis" /><label htmlFor="f4_cb_dis">Select it?</label></div>
              </div>
            </div>
          </fieldset>{/* End of fieldset */}
          <fieldset>
            <legend>Radio Buttons</legend>
            <div className="row">
              <label>
                <strong>Radio Buttons</strong>
              </label>
              <div>
                <div><input type="radio" name="f4_rb" id="f4_rb1" defaultValue="Mastercard" /><label htmlFor="f4_rb1">Mastercard</label></div>
                <div><input type="radio" name="f4_rb" id="f4_rb2" defaultValue="Visa" /><label htmlFor="f4_rb2">Visa</label></div>
                <div><input type="radio" name="f4_rb" id="f4_rb3" defaultValue="AmericanExpress" /><label htmlFor="f4_rb3">American Express</label></div>
              </div>
            </div>
            <div className="row">
              <label>
                <strong>Disabled Radio Buttons</strong>
              </label>
              <div>
                <div><input type="radio" name="f4_rb_dis" id="f4_rb_dis1" disabled defaultValue="Mastercard" /><label htmlFor="f4_rb_dis1">Mastercard</label></div>
                <div><input type="radio" name="f4_rb_dis" id="f4_rb_dis2" defaultChecked disabled defaultValue="Visa" /><label htmlFor="f4_rb_dis2">Visa</label></div>
                <div><input type="radio" name="f4_rb_dis" id="f4_rb_dis3" disabled defaultValue="AmericanExpress" /><label htmlFor="f4_rb_dis3">American Express</label></div>
              </div>
            </div>
          </fieldset>{/* End of fieldset */}
          <fieldset>
            <legend>Slider</legend>
            <div className="row">
              <label htmlFor="f5_slider">
                <strong>Simple Slider</strong>
              </label>
              <div>
                <input data-type="range" name="f5_slider" id="f5_slider" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f5_sliderrange">
                <strong>Range Slider</strong>
              </label>
              <div>
                <input data-type="range" data-range="[15,30]" name="f5_sliderrange" id="f5_sliderrange" />
              </div>
            </div>
          </fieldset>{/* End of fieldset */}
          <fieldset>
            <legend>Text-like Input</legend>
            <div className="row">
              <label htmlFor="f6_complete">
                <strong>Autocomplete</strong>
                <small>e.g. "red"</small>
              </label>
              <div>
                {/* data-data='["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"]' */}
                <input type="text" data-type="autocomplete" id="f6_complete" name="f6_complete" data-source="extras/autocomplete.php" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f6_pw">
                <strong>Password Meter</strong>
              </label>
              <div>
                <input type="password" className="meter strongpw" name="f6_pw" id="f6_pw" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f6_spinner">
                <strong>Spinner</strong>
              </label>
              <div>
                <input data-type="spinner" min={-20} max={20} defaultValue={1} id="f6_spinner" name="f6_spinner" />
              </div>
            </div>
            <div className="row not-on-phone">
              <label htmlFor="f6_file">
                <strong>Upload</strong>
              </label>
              <div>
                <input type="file" id="f6_file" name="f6_file" />
              </div>
            </div>
          </fieldset>{/* End of fieldset */}
          <fieldset className="not-on-phone">
            <legend>Inline Picker</legend>
            <div className="row">
              <label htmlFor="f7_dateinline">
                <strong>Inline Datepicker</strong>
              </label>
              <div>
                <div data-type="datetime" data-id="f7_dateinline" data-name="f7_dateinline" />
              </div>
            </div>
            <div className="row">
              <label htmlFor="f7_color_flat">
                <strong>Inline-Picker</strong>
                <small>(flat picker)</small>
              </label>
              <div>
                <div>
                  <input type="color" className="flat" name="f7_color_flat" id="f7_color_flat" />
                </div>
              </div>
            </div>
          </fieldset>{/* End of fieldset */}
        </form>{/* End of form */}
        <div className="grid_12">
          <form action className="box">
            <div className="header">
              <h2>Masked Inputs</h2>
            </div>
            <div className="content">
              <div className="row">
                <label htmlFor="f8_mi_date">
                  <strong>Date</strong>
                  <small>99/99/9999</small>
                </label>
                <div>
                  <input data-error-type="inline" className="maskDate" name="f8_mi_date" id="f8_mi_date" type="text" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="f8_mi_phone">
                  <strong>Phone</strong>
                  <small>(999) 999-9999</small>
                </label>
                <div>
                  <input className="maskPhone" name="f8_mi_phone" id="f8_mi_phone" type="text" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="f8_mi_intphone">
                  <strong>Int. Phone</strong>
                  <small>+33 999 999 999</small>
                </label>
                <div>
                  <input className="maskIntPhone" name="f8_mi_intphone" id="f8_mi_intphone" type="text" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="f8_mi_tin">
                  <strong>Tax ID</strong>
                  <small>99-9999999</small>
                </label>
                <div>
                  <input className="maskTin" name="f8_mi_tin" id="f8_mi_tin" type="text" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="f8_mi_ssn">
                  <strong>SSN</strong>
                  <small>999-99-9999</small>
                </label>
                <div>
                  <input className="maskSsn" name="f8_mi_ssn" id="f8_mi_ssn" type="text" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="f8_mi_prod">
                  <strong>Product Key</strong>
                  <small>a*-999-a999</small>
                </label>
                <div>
                  <input className="maskProd" name="f8_mi_prod" id="f8_mi_prod" type="text" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="f8_mi_po">
                  <strong>Purchase Order</strong>
                  <small>aaa-999-***</small>
                </label>
                <div>
                  <input className="maskPo" name="f8_mi_po" id="f8_mi_po" type="text" />
                </div>
              </div>
              <div className="row">
                <label htmlFor="f8_mi_perc">
                  <strong>Percent</strong>
                  <small>99%</small>
                </label>
                <div>
                  <input className="maskPct" name="f8_mi_perc" id="f8_mi_perc" type="text" />
                </div>
              </div>
            </div>{/* End of content */}
          </form>{/* End of .box */}
        </div>{/* End of .grid_12 */}
        <div className="grid_12">
          <form action className="box">
            <div className="header">
              <h2>Rich Text Editor (WYSIWYG)</h2>
            </div>
            <div className="content">
              <textarea className="editor full" defaultValue={""} />
            </div>
          </form>
        </div>{/* End of .grid_12 */}
        <div className="grid_4">
          <form className="box grid">
            <div className="header">
              <h2>Full Width Grid</h2>
            </div>
            <div className="content">
              <div className="row">
                <p className="_100">
                  <input type="text" defaultValue="100%" />
                </p>
              </div>
              <div className="row">
                <p className="_50">
                  <input type="text" defaultValue="50%" />
                </p>
                <p className="_50">
                  <input type="text" defaultValue="50%" />
                </p>
              </div>
              <div className="row">
                <p className="_25">
                  <input type="text" defaultValue="25%" />
                </p>
                <p className="_75">
                  <input type="text" defaultValue="75%" />
                </p>
              </div>
              <div className="row">
                <p className="_75">
                  <input type="text" defaultValue="75%" />
                </p>
                <p className="_25">
                  <input type="text" defaultValue="25%" />
                </p>
              </div>
              <div className="row">
                <p className="_25">
                  <input type="text" defaultValue="25%" />
                </p>
                <p className="_25">
                  <input type="text" defaultValue="25%" />
                </p>
                <p className="_25">
                  <input type="text" defaultValue="25%" />
                </p>
                <p className="_25">
                  <input type="text" defaultValue="25%" />
                </p>
              </div>
            </div>{/* End of .content */}
          </form>{/* End of .box */}
        </div>{/* End of .grid_4 */}
        <div className="grid_4">
          <form className="box grid">
            <div className="header">
              <h2>Full Width Grid with Label</h2>
            </div>
            <div className="content">
              <div className="row">
                <p className="_100">
                  <label>100%</label>
                  <input type="text" />
                </p>
              </div>
              <div className="row">
                <p className="_50">
                  <label>50%</label>
                  <input type="text" />
                </p>
                <p className="_50">
                  <label>50%</label>
                  <input type="text" />
                </p>
              </div>
              <div className="row">
                <p className="_25">
                  <label>25%</label>
                  <input type="text" />
                </p>
                <p className="_25">
                  <label>25%</label>
                  <input type="text" />
                </p>
                <p className="_25">
                  <label>25%</label>
                  <input type="text" />
                </p>
                <p className="_25">
                  <label>25%</label>
                  <input type="text" />
                </p>
              </div>
            </div>{/* End of .content */}
          </form>{/* End of .box */}
        </div>{/* End of .grid_4 */}
        <div className="grid_4">
          <form method="post" action="#" className="box validate">
            <div className="header">
              <h2>Full Width Grid with Inline Label</h2>
            </div>
            <div className="content">
              <div style={{height: 10}} className="clear" />
              <p className="_100 small">
                <label htmlFor="f9_ban" className="inline">Bank Account Number:</label>
                <input data-error-type="inline" type="text" className="required" name="f9_ban" id="f9_ban" pattern="^\d{1,10}$" />
              </p>
              <p className="_100 small">
                <label htmlFor="f9_name" className="inline">Name:</label>
                <input data-error-type="inline" type="text" className="required" name="f9_name" id="f9_name" />
              </p>
              <p className="_100 small">
                <label htmlFor="f9_pin" className="inline">PIN:</label>
                <input data-error-type="inline" type="password" className="required" name="f9_pin" id="f9_pin" />
              </p>
              <div style={{height: 10}} className="clear" />
            </div>{/* End of .content */}
            <div className="actions">
              <div className="left">
                <input type="reset" defaultValue="Cancel" />
              </div>
              <div className="right">
                <input type="submit" defaultValue="Send" name="send" />
              </div>
            </div>{/* End of .actions */}
          </form>{/* End of .box */}
        </div>{/* End of .grid_4 */}
      </section>
    </>
  )
}


//3. Export area

//3.1 Default Export
export default Forms;