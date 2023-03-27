import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='fintPrintBar'>
    <div className='row'>
      <p><strong>Please note the current interest rate as of November 2022:</strong></p>
      <p >From 7.99% OAC with amortization of 180 months for new cottages. Maximum to finance $200,000. These rates are subject to change without notice. E &amp; O.E. For down payments, a maximum of $20,000 can be paid using a credit card. Any further payments can be paid by transfer or certified cheque.</p>
    </div>
  </div>
  <footer id='footer'>
    <div className='footer1 another '>
      <div className='footer2'>
        <div>
          <h3>CORPORATE OFFICE</h3>
          <h4>612-A Welland Avenue St. Catharines,<br /> ON L2M 5V6Toll-Free: +1 877-814-4141<br /></h4>
          <img src="./gbr-footer.png" alt="Great Blue Resorts"></img>


        </div>

      </div>
      <div class="social page">
        <h3>Let's Get Social</h3>
        <div class="socialLinks">
          <a href="https://www.facebook.com/greatblueresorts" target="_blank" title="Like us on facebook">
            <img src="https://www.greatblueresorts.com/wp-content/themes/do180-theme/images/facebook-2.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com/greatblueresorts/" target="_blank" title="Follow us on instagram">
            <img src="https://www.greatblueresorts.com/wp-content/themes/do180-theme/images/instagram-2.png" alt="instagram" />
          </a>
          <a href="https://www.twitter.com/greatblueresort" target="_blank" title="Follow us on twitter">
            <img src="https://www.greatblueresorts.com/wp-content/themes/do180-theme/images/twitter-2.png" alt="twitter" />
          </a>
          <a href="https://www.youtube.com/channel/UCStX7YFUTZkhCoVSnz971iA" target="_blank" title="Watch our videos on youtube">
            <img src="https://www.greatblueresorts.com/wp-content/themes/do180-theme/images/youtube-2.png" alt="youtube" />
          </a>
        </div>
        <div class="translate">
          <h4>Choose Your Preferred Language</h4>
          <div id="google_language_translator" class="default-language-en">
            <div class="skiptranslate goog-te-gadget" >
              <div id="targetLanguage" >
                <select class="goog-te-combo" aria-label="Language Translate Widget">
                  <option value="">Select Language</option>
                  <option value="zh-CN">Chinese (Simplified)</option>
                  <option value="zh-TW">Chinese (Traditional)</option>
                  <option value="fr">French</option>
                  <option value="pt">Portuguese</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
              &nbsp;&nbsp;Powered by
              <span >
                <a class="VIpgJd-ZVi9od-l4eHX-hSRGPd" href="https://translate.google.com" target="_blank">
                  <img class="img1" src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png" alt="Google Translate" />
                  Translate</a>
              </span>
            </div>
          </div>
        </div>
      </div >
      <div class="newsletter">

        <h4>
          Helpful links
        </h4>
        <p>
          <a href="/resorts/" title="Resorts">Resorts</a><br />
          <a href="/for-sale/" title="For Sale">For Sale</a><br />
          <a href="/rent/" title="Rent">Rent</a><br />
          <a href="/about/" title="About">About</a><br />
          <a href="/about/careers/" title="Careers">Job Postings</a><br />
          <a href="/contact/" title="Contact">Contact</a>
        </p>
      </div>
    </div >
    <div class="row expanded footer" role="contentinfo">
      <div class="large-12 medium-12 small-12 columns">
        <p><strong>Copyright ©2023 Great Blue Resorts. All Rights Reserved.</strong></p>
        <p>All files and information contained in this Website or are copyright by Great Blue Resorts, and may not be duplicated, copied, modified or adapted, in any way without our written permission. GreatBlueResorts.com may contain our service marks or trademarks as well as those of our affiliates or other companies, in the form of words, graphics, and logos. Your use of our Website does not constitute any right or license for you to use our logo, trade or word marks, images, renderings or copy without the prior written permission of Great Blue Resorts. Our website content including verbiage, images and renderings, is protected under Canada and foreign copyrights. The copying, redistribution, use or publication by you of any such Content, is strictly prohibited. Your use of our Website does not grant you any ownership rights of any kind, to its content therein.</p>
        <p><span class="design">Site by <a href="http://www.do180.com/" title="180 Marketing" target="_blank" class="do180">180 Marketing</a></span></p>
      </div>
    </div>
  </footer >
  <div className='formTab tellMe open'>
    <h3 class="mainFormTitle open">Discover More</h3>
  </div>
  </>
  )
}

export default Footer