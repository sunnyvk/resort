import React from 'react'
import './Home.css'
import Video from '../Video'

import { Image } from 'react-bootstrap'

const Home = () => {
  return (
    <section className='Home'>
      <Video />
      <div className='entry-content'>
        <div className='mid'>
          <h2 className='columns'>Own your own piece of Ontario’s Cottage Country at Great Blue Resorts.</h2>
        </div>
        <div className='large-columns'>
          <p>Welcome to Great Blue Resorts where you will find the perfect city escape that includes all the amenities your family comes to expect from a resort – heated pools, multi-sports courts and playgrounds, and best of all, sandy combed beaches. Think stunning views, beautiful surroundings and endless options for outdoor adventure, for sale or rent.</p>
          <p>
            When you step inside your new home-away-from-home you’ll find the start of many family memories. Professionally designed, fully furnished and includes all your appliances so you have all the comforts of home. Enjoy stress-free and virtually maintenance-free cottage ownership along with all-inclusive amenities, full family entertainment and more!  Choose from nine great Ontario locations in highly sought after Muskoka, Prince Edward County, The Kawarthas, Perth and Saugeen Shores.
          </p>
          <p>So what are you waiting for? View available
            <a href="/own">cottage models for sale</a>
            , or
            <a href="/rent">start planning your family vacation today.</a>
          </p>
        </div>
      </div>
      <div className='npCallout'>
        <div className='row'>
          <div className='columns'>
            <h2>New Phases of Development for 2023</h2>
            <p>This exciting opportunity allows owners to select their preferred lot and new cottage model within the phase.</p>
            <p>&nbsp;</p>
            <p>
              <a class="button green" href="https://www.greatblueresorts.com/new-phases/">Learn More</a>
            </p>
          </div>
        </div>
        {/* <div className='npSlider'>
            <div class=" cycle-sentinel" style={{backgroundImage:'url("https://www.greatblueresorts.com/wp-content/uploads/2023/03/GBR_Web_New-Phases-Slide_2023-Pics2-1024x552.jpg")'}} ></div>
            <img src="https://www.greatblueresorts.com/wp-content/uploads/2023/03/slide-overlay-2.png"></img>
            <div class=" cycle-slide1"  style={{backgroundImage:'url("https://www.greatblueresorts.com/wp-content/uploads/2023/03/GBR_Web_New-Phases-Slide_2023-Pics2-1024x552.jpg")'}} ></div>
            <div class="cycle-slide2"  style={{backgroundImage:'url("https://www.greatblueresorts.com/wp-content/uploads/2023/03/GBR_Web_New-Phases-Slide_2023-Pics6-1024x552.jpg")'}} ></div>
            <div class="cycle-slide3" style={{backgroundImage:'url("https://www.greatblueresorts.com/wp-content/uploads/2023/03/GBR_Web_New-Phases-Slide_2023-Pics4-1024x552.jpg")'}}></div>
            <div class="cycle-slide4" style={{backgroundImage:'url("https://www.greatblueresorts.com/wp-content/uploads/2023/03/GBR_Web_New-Phases-Slide_2023-Pics8-1024x552.jpg")'}}></div>
            <div class="cycle-slide5"  style={{backgroundImage:'url("https://www.greatblueresorts.com/wp-content/uploads/2023/03/GBR_Web_New-Phases-Slide_2023-Pics7-1024x552.jpg")'}}></div>
          </div> */}
      </div>


      <div class="listCottages">
        <div class="row">
          <div class="large-12 medium-12 small-12 columns">
            <div class="homelist">
              <h2 class="latesth2">New Cottages For Sale</h2>
              <div class="latestCottages owl-carousel owl-loaded owl-drag">
                <div class="owl-stage-outer">
                  <div class="owl-stage">
                    <div class="owl-stage1">
                      <div class="owl-item ">
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/new-cottage/the-kingfisher-deluxe/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2018/01/Kingfisher_FINAL-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="The Kingfisher Deluxe" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $229,900 </div>
                              <h3>The Kingfisher Deluxe</h3>
                              <div class="summaryPrices">
                                $1,911/mo &nbsp;
                                $440/wk &nbsp;
                                $59,787 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>3 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 2 bathrooms </div>
                              <div class="resortRegion">
                                <strong>Available at:</strong> Bellmere Winds Golf Resort, Bonnie Lake Resort
                              </div>
                              <div class="button">Learn More
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="owl-item ">
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/new-cottage/the-superior/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2019/02/Superior-e1571765780262-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $249,900 </div>
                              <h3>The Superior</h3>
                              <div class="summaryPrices">
                                $1,911/mo &nbsp;
                                $440/wk &nbsp;
                                $82,387 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>3 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 2 bathrooms </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> Bellmere Winds Golf Resort, Bonnie Lake Resort
                              </div>
                              <div class="button">Learn More
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="owl-item " >
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/new-cottage/the-superior-deluxe/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="Superior Deluxe" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $279,900
                              </div>
                              <h3>The Superior Deluxe</h3>
                              <div class="summaryPrices">
                                $1,911/mo &nbsp;
                                $440/wk &nbsp;
                                $116,287 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>3 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 2 bathrooms </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> Bellmere Winds Golf Resort, Bonnie Lake Resort
                              </div>
                              <div class="button">Learn More</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="owl-item" >
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/bonnie-lake-resort/88-buttonbush-trail/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2023/02/Kingfisher-Kitchen-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="88 Buttonbush Trail" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $209,900
                              </div>
                              <h3>88 Buttonbush Trail</h3>
                              <div class="summaryPrices">
                                $1,812/mo &nbsp;
                                $417/wk &nbsp;
                                $47,437 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>3 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 2 bathrooms
                              </div>
                              <div class="resortRegion">
                                <strong>Available at:</strong> Bonnie Lake Resort
                              </div>
                              <div class="button">Learn More</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="owl-item">
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/villages-port-elgin/4-season-saugeen/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2023/02/Saugeen-4-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="4 Season Saugeen" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $359,900
                              </div>
                              <h3>4 Season Saugeen</h3>
                              <div class="summaryPrices">
                                $3,107/mo &nbsp;
                                $715/wk &nbsp;
                                $81,337 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>2 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 2 bathrooms
                              </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> Villages Port Elgin
                              </div>
                              <div class="button">Learn More
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="owl-item" >
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/bonnie-lake-resort/86-buttonbush-trail/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/themes/do180-theme/images/sold.png" alt="Sold" class="flag" />
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2023/02/86-living-space-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="86 Buttonbush Trail" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $249,900
                              </div>
                              <h3>86 Buttonbush Trail</h3>
                              <div class="summaryPrices">
                                $1,911/mo &nbsp;
                                $440/wk &nbsp;
                                $82,387 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>3 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 2 bathrooms
                              </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> Bonnie Lake Resort
                              </div>
                              <div class="button">Learn More</div>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div class="owl-item" >
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/new-cottage/the-windsor/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2023/01/Excel-19491-2-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="The Windsor" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $169,900
                              </div>
                              <h3>The Windsor</h3>
                              <div class="summaryPrices">
                                $1,467/mo &nbsp;
                                $338/wk &nbsp;
                                $38,397 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>3 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 1 bathroom </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> Bellmere Winds Golf Resort, Bonnie Lake Resort
                              </div>
                              <div class="button">Learn More</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="owl-item" >
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/villages-port-elgin/turnberry/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/themes/do180-theme/images/sold.png" alt="Sold" class="flag" />
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2023/01/TURNBERRY2022-scaled-1-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="Turnberry" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $339,900
                              </div>
                              <h3>4 Season Turnberry</h3>
                              <div class="summaryPrices">
                                $2,896/mo &nbsp;
                                $667/wk &nbsp;
                                $75,800 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>2 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 2 bathrooms </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> Villages Port Elgin
                              </div>
                              <div class="button">Learn More
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="owl-item" >
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/villages-port-elgin/ashfield/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2023/01/ASHFIELD2022-scaled-1-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="Ashfield" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $349,900 </div>
                              <h3>4 Season Ashfield</h3>
                              <div class="summaryPrices">
                                $2,982/mo &nbsp;
                                $686/wk &nbsp;
                                $78,060 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>2 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 2 bathrooms </div>
                              <div class="resortRegion">
                                <strong>Available at:</strong> Villages Port Elgin
                              </div>
                              <div class="button">Learn More
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div class="owl-item">
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/villages-port-elgin/lyal/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2023/01/Exterior_01_S1-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="4 Season Lyal" loading="lazy" /> </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $259,900
                              </div>
                              <h3>4 Season Lyal</h3>
                              <div class="summaryPrices">
                                $2,205/mo &nbsp;
                                $508/wk &nbsp;
                                $57,720 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>2 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 1 bathroom
                              </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> Villages Port Elgin
                              </div>
                              <div class="button">Learn More</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="owl-item">
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/golden-beach-resort/2022-northlander-superior/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/themes/do180-theme/images/limited.png" alt="Limited Quantity" class="flag" />
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2020/11/Superior-e1571765780262-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="The Superior" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $249,900 </div>
                              <h3>2022 Northlander Superior</h3>
                              <div class="summaryPrices">
                                $1,911/mo &nbsp;
                                $440/wk &nbsp;
                                $82,387 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>3 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 2 bathrooms </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> Golden Beach Resort
                              </div>
                              <div class="button">Learn More
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="owl-item" >
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/mccrearys-beach-resort/157-mccrearys-beach-road/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/themes/do180-theme/images/limited.png" alt="Limited Quantity" class="flag" />
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2022/11/TC-exterior-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="157 McCreary's Beach Road" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $139,900 </div>
                              <h3>157 McCreary’s Beach Road</h3>
                              <div class="summaryPrices">
                                $1,208/mo &nbsp;
                                $278/wk &nbsp;
                                $31,617 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>2 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 1 bathroom </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> McCreary’s Beach Resort
                              </div>
                              <div class="button">Learn More
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div class="owl-item" >
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/mccrearys-beach-resort/636-woodland-heights-way/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/themes/do180-theme/images/limited.png" alt="Limited Quantity" class="flag" />
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2022/11/Clearwater_FINAL-1024x576-1-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="636 Woodland Heights Way" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $213,900 </div>
                              <h3>636 Woodland Heights Way</h3>
                              <div class="summaryPrices">
                                $1,874/mo &nbsp;
                                $425/wk &nbsp;
                                $48,341 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>2 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 1 bathroom
                              </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> McCreary’s Beach Resort
                              </div>
                              <div class="button">Learn More
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="owl-item" >
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/shamrock-bay-resort/233-shamrock-marina-road/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2022/09/Pic4-400x235.jpeg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="233 Shamrock Marina Road" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $120,000
                              </div>
                              <h3>233 Shamrock Marina Road</h3>
                              <div class="summaryPrices">
                                $808/mo &nbsp;
                                $239/wk &nbsp;
                                $27,120 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>3 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 1 bathroom
                              </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> Shamrock Bay Resort
                              </div>
                              <div class="button">Learn More
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="owl-item" >
                        <div class="item cottage">
                          <a href="https://www.greatblueresorts.com/for-sale/cherry-beach-resort/31-beach-view-lane/">
                            <div class="featImg">
                              <img src="https://www.greatblueresorts.com/wp-content/uploads/2018/01/Superior-Deluxe-400x235.jpg" class="attachment-cottageThumbnail size-cottageThumbnail wp-post-image" alt="Superior Deluxe" loading="lazy" />
                            </div>
                            <div class="info">
                              <div class="priceBox salePrices">
                                $299,900 </div>
                              <h3>31 Beach View Lane</h3>
                              <div class="summaryPrices">
                                $1,910/mo &nbsp;
                                $440/wk &nbsp;
                                $138,887 down &nbsp;
                              </div>
                              <div class="bedsBaths">
                                <i class="fas fa-bed" aria-hidden="true"></i>3 bedrooms &nbsp;
                                <i class="fas fa-bath" aria-hidden="true"></i> 2 bathrooms </div>
                              <div class="resortRegion" >
                                <strong>Available at:</strong> Cherry Beach Resort
                              </div>
                              <div class="button">Learn More</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="owl-nav">
                  <button type="button" role="presentation" class="owl-prev">
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button type="button" role="presentation" class="owl-next">
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div class="owl-dots">
                  <button role="button" class="owl-dot active">
                    <span></span>
                  </button>
                  <button role="button" class="owl-dot">
                    <span></span>
                  </button>
                  <button role="button" class="owl-dot">
                    <span></span>
                  </button>
                  {/* <button role="button" class="owl-dot"><span></span>
                        </button>
                        <button role="button" class="owl-dot"><span></span>
                        </button>
                        <button role="button" class="owl-dot"><span></span>
                        </button>
                        <button role="button" class="owl-dot"><span></span>
                        </button>
                        <button role="button" class="owl-dot"><span></span>
                        </button>
                        <button role="button" class="owl-dot"><span></span>
                        </button> */}
                </div>


              </div>
            </div>

            <p>
              <a href="/own/" title="Own a Cottage" class="button">View All &gt;</a>
            </p>

          </div>
        </div>
      </div>


      <section class="media_gallery featured-products">
                 <div class="row">
                        <ul class="small-block-grid-1 large-block-grid-4 text-center collection listing items">
                            
                               <li class="items">
                               <div class="image">
                                
                                <a href="/pages/beach-resort-bungalows-huts-hotels">
                                
                                <img src="//d2wvwvig0d1mx7.cloudfront.net/data/org/17347/media/img/cache/55x55/1802737_55x55.jpg" alt="About Cuba Goa" />
                                
                                </a>
                                
                                </div>
                                
                                <div class="image-title"><a href="/pages/beach-resort-bungalows-huts-hotels">About Cuba Goa</a></div>
                                
                                 <div class="image-description"></div>
                               </li>
                           
                               <li class="items">
                               <div class="image">
                                
                                <a href="/pages/beach-huts-bungalows-resorts">
                                
                                <img src="//d2wvwvig0d1mx7.cloudfront.net/data/org/17347/media/img/cache/55x55/1802735_55x55.jpg" alt="Contact Cuba Goa" />
                                
                                </a>
                                
                                </div>
                                
                                <div class="image-title"><a href="/pages/beach-huts-bungalows-resorts">Contact Cuba Goa</a></div>
                                
                                 <div class="image-description"></div>
                               </li>
                           
                               <li class="items">
                               <div class="image">
                                
                                <a href="/blogs/our-blog">
                                
                                <img src="//d2wvwvig0d1mx7.cloudfront.net/data/org/17347/media/img/cache/55x55/1802734_55x55.jpg" alt="Blog Cuba Goa" />
                                
                                </a>
                                
                                </div>
                                
                                <div class="image-title"><a href="/blogs/our-blog">Blog Cuba Goa</a></div>
                                
                                 <div class="image-description"></div>
                               </li>
                           
                               <li class="items">
                               <div class="image">
                                
                                <a href="/pages/gallery">
                                
                                <img src="//d2wvwvig0d1mx7.cloudfront.net/data/org/17347/media/img/cache/55x55/1802736_55x55.jpg" alt="Cuba Goa Gallery" />
                                
                                </a>
                                
                                </div>
                                
                                <div class="image-title"><a href="/pages/gallery">Cuba Goa Gallery</a></div>
                                
                                 <div class="image-description"></div>
                               </li>
                           
                           </ul>
                   </div>
            </section>












     {/* <div class="socialfeed">
        <div class="row">
          <div class="large-12 medium-12 small-12 columns">
            <h2>What's Happening @GreatBlueResorts</h2>
            <div class="socialWrap">
              <div id="sb_instagram" class="sbi sbi_mob_col_auto sbi_tab_col_2 sbi_col_6 sbi_width_resp sbi_medium" style={{paddingBottom: "10px" , width:"100%"}} data-feedid="sbi_17841401589510165#24" data-res="auto" data-cols="6" data-colsmobile="auto" data-colstablet="2" data-num="24" data-nummobile="5" data-header-size="small" data-shortcode-atts="{}" data-postid="36" data-locatornonce="604ffc6f35" data-options="{&quot;grid&quot;:true,&quot;avatars&quot;:{&quot;greatblueresorts&quot;:&quot;&quot;,&quot;LCLgreatblueresorts&quot;:0},&quot;colsmobile&quot;:&quot;auto&quot;,&quot;colstablet&quot;:2,&quot;captionsize&quot;:13,&quot;captionlength&quot;:50}" data-sbi-flags="favorLocal" data-sbi-index="1">
                <div id="sbi_images" > */}
                  {/* <div class="sbi_item sbi_type_image" id="sbi_17977739647904176" data-date="1679001187" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" ><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/335154000_934661690899831_8012487029997330861_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=9G2U6UMNO1sAX_I5Pem&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBVDReZHtwOLnphHS3IqDbxO9IFTd3PGfnod53oVkI0Gw&amp;oe=641CDAEA" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Golden Beach Resort offers cottage country vacations that your family will remember for a lifetime ❤️ <br>
<br>
Did you know all of our rental resort cottages are always located just a short walk to a wide arrange of resort amenities including a pool, beach, multi-sports courts, playgrounds and so much more!<br>
<br>
Visit the link in our bio to book your 2023 family vacation today!<br>
<br>
📸 @allirowswell <br>
<br>
#GreatBlueResorts #OntarioCottageRental #OntarioCottageRentals #CottageRental #CottageRentals #CottageCountry #CottageCountryOntario #CottageWeekend #CottageVacation #OntarioTravel #OntarioTourism #Spring2023 #VacationPlanning #ExploreOntario #DiscoverOntario #OntarioAdventure #OntarioLiving #OntarioAdventures" data-video="" data-carousel="" data-id="sbi_17977739647904176" data-user="greatblueresorts" data-url="https://www.instagram.com/p/Cp3U22EpdsH/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/Cp3U22EpdsH/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/335154000_934661690899831_8012487029997330861_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335154000_934661690899831_8012487029997330861_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=9G2U6UMNO1sAX_I5Pem&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBVDReZHtwOLnphHS3IqDbxO9IFTd3PGfnod53oVkI0Gw&amp;oe=641CDAEA&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335154000_934661690899831_8012487029997330861_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=9G2U6UMNO1sAX_I5Pem&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBVDReZHtwOLnphHS3IqDbxO9IFTd3PGfnod53oVkI0Gw&amp;oe=641CDAEA&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335154000_934661690899831_8012487029997330861_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=9G2U6UMNO1sAX_I5Pem&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBVDReZHtwOLnphHS3IqDbxO9IFTd3PGfnod53oVkI0Gw&amp;oe=641CDAEA&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335154000_934661690899831_8012487029997330861_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=9G2U6UMNO1sAX_I5Pem&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBVDReZHtwOLnphHS3IqDbxO9IFTd3PGfnod53oVkI0Gw&amp;oe=641CDAEA&quot;}" style={{height: "225px" , backgroundImage: "url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/335154000_934661690899831_8012487029997330861_nlow.jpg&quot)" , backgroundSize: "cover" , backgroundPosition: "center", backgroundRepeat: "no-repeat" , paddingBottom: "0px" }}>
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/335154000_934661690899831_8012487029997330861_nlow.jpg" alt="Golden Beach Resort offers cottage country vacations that your family will remember for a lifetime ❤️ 

Did you know all of our rental resort cottages are always located just a short walk to a wide arrange of resort amenities including a pool, beach, multi-sports courts, playgrounds and so much more!

Visit the link in our bio to book your 2023 family vacation today!

📸 @allirowswell 

#GreatBlueResorts #OntarioCottageRental #OntarioCottageRentals #CottageRental #CottageRentals #CottageCountry #CottageCountryOntario #CottageWeekend #CottageVacation #OntarioTravel #OntarioTourism #Spring2023 #VacationPlanning #ExploreOntario #DiscoverOntario #OntarioAdventure #OntarioLiving #OntarioAdventures"  />
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_carousel" id="sbi_18013372570557866" data-date="1678999019" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap">
                        <a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/336677520_1212265889404435_6330382194202243143_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=pjlpebhkU3YAX9AzXkN&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCNv444NdCBYsBfBZgE8uhFw5nCx7waw1PpCQ8WNIBwPQ&amp;oe=641C9676" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Join us this weekend at Shamrock Bay Resort for our first open-house event of 2023! 🗓<br>
<br>
While you're here take a tour of the resort, and enjoy complimentary coffee, tea, hot chocolate, and cookies as well as a campfire at the welcome centre!<br>
<br>
Swipe ➡️ to check out these in-stock models, all move-in ready for you and your family to enjoy the 2023 cottage season.<br>
<br>
As an added bonus, purchase a pre-loved cottage during the open house and receive a $1,000 resort credit**<br>
<br>
RSVP today by emailing sales@greatblueresorts.com!<br>
<br>
#GreatBlueResorts #CottageSale #CottageSales #CottagesForSale #CottageRealEstate #OntarioCottage #OntarioCottages #CottageCountryOntario #OntarioCottageCountry #CottageOwner #CottageLiving #OntarioRealEstate #Muskoka #MuskokaCottages #OpenHouse #ShamrockBayResort" data-video="" data-carousel="{&quot;data&quot;:[{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/336677520_1212265889404435_6330382194202243143_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=pjlpebhkU3YAX9AzXkN&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCNv444NdCBYsBfBZgE8uhFw5nCx7waw1PpCQ8WNIBwPQ&amp;oe=641C9676&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335127559_740568027772636_1404947625072317788_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=sli6wmRWGegAX-L7aZm&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfC_Cr7jpWpJpX5H8WkVLDplG3g5vNckPo33WSUbRmgxfg&amp;oe=641CD5CE&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/336555210_200989469218597_7432130322229839714_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=o9Ud1ZrNuT4AX_WDJWT&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBK-H-E-EbTuEnwcBktiKOEZoak20Woe845JIIphLbAmg&amp;oe=641C9390&quot;}],&quot;vid_first&quot;:false}" data-id="sbi_18013372570557866" data-user="greatblueresorts" data-url="https://www.instagram.com/p/Cp3QuNKOGcw/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>
                        <svg class="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                        </svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/Cp3QuNKOGcw/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/336677520_1212265889404435_6330382194202243143_nfull.jpg"  style={{height: "225px" , backgroundImage: "url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/336677520_1212265889404435_6330382194202243143_nlow.jpg&quot)" , backgroundSize: "cover" , backgroundPosition: "center" , backgroundRepeat:" no-repeat" ,paddingBottom: "0px" }}>
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/336677520_1212265889404435_6330382194202243143_nlow.jpg" alt="Join us this weekend at Shamrock Bay Resort for our first open-house event of 2023! 🗓

While you're here take a tour of the resort, and enjoy complimentary coffee, tea, hot chocolate, and cookies as well as a campfire at the welcome centre!

Swipe ➡️ to check out these in-stock models, all move-in ready for you and your family to enjoy the 2023 cottage season.

As an added bonus, purchase a pre-loved cottage during the open house and receive a $1,000 resort credit**

RSVP today by emailing sales@greatblueresorts.com!

#GreatBlueResorts #CottageSale #CottageSales #CottagesForSale #CottageRealEstate #OntarioCottage #OntarioCottages #CottageCountryOntario #OntarioCottageCountry #CottageOwner #CottageLiving #OntarioRealEstate #Muskoka #MuskokaCottages #OpenHouse #ShamrockBayResort" style={{display: "none"}} />
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div> */}


                  {/* <div class="sbi_item sbi_type_image" id="sbi_18004159462620334" data-date="1678991323" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/335113449_3246166422341063_2906841652669607704_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Hg7-d-zyXyQAX_zUOAX&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD1VYmJm4eRBSKSURa4Nv3z5GjU0gYRkz6GBuRO3Aj33A&amp;oe=641D74BD" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Only 44 more days until the Great Blue Resorts season is officially underway!☀️<br>
<br>
What traditions are you looking to continue with family and friends during the 2023 season?👇<br>
<br>
#CottageSeason #CottageLiving #CottageLife #OntarioCottage #OntarioCottages #ResortLife #OntarioTravel #TravelOntario #ExploreOntario#YoursToDiscover #LakeCottage #Muskoka #MuskokaCottage #TheKawarthas #KawarthasCottages #PerthOntario #PrinceEdwardCounty" data-video="" data-carousel="" data-id="sbi_18004159462620334" data-user="greatblueresorts" data-url="https://www.instagram.com/p/Cp3CCxHu0Ow/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/Cp3CCxHu0Ow/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/335113449_3246166422341063_2906841652669607704_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335113449_3246166422341063_2906841652669607704_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Hg7-d-zyXyQAX_zUOAX&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD1VYmJm4eRBSKSURa4Nv3z5GjU0gYRkz6GBuRO3Aj33A&amp;oe=641D74BD&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335113449_3246166422341063_2906841652669607704_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Hg7-d-zyXyQAX_zUOAX&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD1VYmJm4eRBSKSURa4Nv3z5GjU0gYRkz6GBuRO3Aj33A&amp;oe=641D74BD&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335113449_3246166422341063_2906841652669607704_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Hg7-d-zyXyQAX_zUOAX&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD1VYmJm4eRBSKSURa4Nv3z5GjU0gYRkz6GBuRO3Aj33A&amp;oe=641D74BD&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335113449_3246166422341063_2906841652669607704_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Hg7-d-zyXyQAX_zUOAX&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD1VYmJm4eRBSKSURa4Nv3z5GjU0gYRkz6GBuRO3Aj33A&amp;oe=641D74BD&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/335113449_3246166422341063_2906841652669607704_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/335113449_3246166422341063_2906841652669607704_nlow.jpg" alt="Only 44 more days until the Great Blue Resorts season is officially underway!☀️

What traditions are you looking to continue with family and friends during the 2023 season?👇

#CottageSeason #CottageLiving #CottageLife #OntarioCottage #OntarioCottages #ResortLife #OntarioTravel #TravelOntario #ExploreOntario#YoursToDiscover #LakeCottage #Muskoka #MuskokaCottage #TheKawarthas #KawarthasCottages #PerthOntario #PrinceEdwardCounty" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_image" id="sbi_17973953534140551" data-date="1678911382" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/336370093_113969904924541_508757510989459078_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=M3WWpN6WMgUAX_1tmH9&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB9kV0DaRBue4OeT9c-8lnOs7_xL8BR8gaYoxiWFGnqwA&amp;oe=641D1FBA" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Swing by and join us at the tenth annual Niagara Golf Show &amp; Sale! ⛳️<br>
<br>
Join the team from Bellmere Winds Golf Resort March 18th &amp; 19th. Welcome in the new golf season and take advantage of show exclusive membership specials. Plus, visit us at the show to Spin to Win great prizes including a Stay &amp; Play Getaway for up to 4 people. <br>
<br>
Visit us at the Americana Resort in Niagara Falls to learn more about resort cottage ownership in The Kawarthas and how you can spend 26 weeks of the year with unlimited golf!<br>
<br>
To purchase tickets and learn more about the Niagara Golf Show, visit niagaragolfshow.com today. <br>
<br>
#OntarioGolf #GolfOntario #OntarioGolfCourses #KawarthasGolf #TheKawarthas #KawarthaCottages #GolfLife #KawarthaGolfCourse #BellmereWindsGolfResort #OntarioTravel #ExploreOntario #YoursToDiscover #OntarioCottage #CottageCountryOntario #NiagaraGolfShow" data-video="" data-carousel="" data-id="sbi_17973953534140551" data-user="greatblueresorts" data-url="https://www.instagram.com/p/Cp0pkUROGlT/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>


                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/Cp0pkUROGlT/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/336370093_113969904924541_508757510989459078_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/336370093_113969904924541_508757510989459078_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=M3WWpN6WMgUAX_1tmH9&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB9kV0DaRBue4OeT9c-8lnOs7_xL8BR8gaYoxiWFGnqwA&amp;oe=641D1FBA&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/336370093_113969904924541_508757510989459078_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=M3WWpN6WMgUAX_1tmH9&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB9kV0DaRBue4OeT9c-8lnOs7_xL8BR8gaYoxiWFGnqwA&amp;oe=641D1FBA&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/336370093_113969904924541_508757510989459078_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=M3WWpN6WMgUAX_1tmH9&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB9kV0DaRBue4OeT9c-8lnOs7_xL8BR8gaYoxiWFGnqwA&amp;oe=641D1FBA&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/336370093_113969904924541_508757510989459078_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=M3WWpN6WMgUAX_1tmH9&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB9kV0DaRBue4OeT9c-8lnOs7_xL8BR8gaYoxiWFGnqwA&amp;oe=641D1FBA&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/336370093_113969904924541_508757510989459078_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/336370093_113969904924541_508757510989459078_nlow.jpg" alt="Swing by and join us at the tenth annual Niagara Golf Show &amp; Sale! ⛳️

Join the team from Bellmere Winds Golf Resort March 18th &amp; 19th. Welcome in the new golf season and take advantage of show exclusive membership specials. Plus, visit us at the show to Spin to Win great prizes including a Stay &amp; Play Getaway for up to 4 people. 

Visit us at the Americana Resort in Niagara Falls to learn more about resort cottage ownership in The Kawarthas and how you can spend 26 weeks of the year with unlimited golf!

To purchase tickets and learn more about the Niagara Golf Show, visit niagaragolfshow.com today. 

#OntarioGolf #GolfOntario #OntarioGolfCourses #KawarthasGolf #TheKawarthas #KawarthaCottages #GolfLife #KawarthaGolfCourse #BellmereWindsGolfResort #OntarioTravel #ExploreOntario #YoursToDiscover #OntarioCottage #CottageCountryOntario #NiagaraGolfShow" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_video" id="sbi_18207510097209464" data-date="1678463166" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t51.29350-15/333363604_254501130233313_6846080317977905711_n.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=mok6aWjaVPIAX_f9AXH&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAsoxhVkCViMlLbn1D5r7QyjZlFKQfjdW4tmUQDnSB1rA&amp;oe=641DC345" rel="nofollow noopener" data-lightbox-sbi="1" data-title="There’s nothing more peaceful than a summer morning at Bellmere Winds Golf Resort ⛳️<br>
<br>
With spring just around the corner, make sure to book your 2023 vacation in The Kawarthas before it’s too late!<br>
<br>
Visit the link in our bio today to select your preferred accommodations for your cottage country getaway.<br>
<br>
📸 @mgd_mediaco<br>
<br>
#GreatBlueResorts #OntarioCottageRental #OntarioCottageRentals #CottageRental #CottageRentals #CottageCountry #CottageCountryOntario #CottageWeekend #CottageVacation #OntarioTravel #OntarioTourism #Spring2023 #VacationPlanning #ExploreOntario #DiscoverOntario #OntarioAdventure #OntarioLiving #OntarioAdventures" data-video="https://video-yyz1-1.cdninstagram.com/o1/v/t16/f1/m82/A943C8E7BCA9EE085F2199A9EB076A98_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&amp;_nc_ht=video-yyz1-1.cdninstagram.com&amp;_nc_cat=108&amp;vs=140265405631755_674540248&amp;_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9BOTQzQzhFN0JDQTlFRTA4NUYyMTk5QTlFQjA3NkE5OF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR055T3p4UHJ2R3p1UVVzREFCUnNmc2Y1U3RzdWJxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmrKu68Im55z8VAigCQzMsF0A4CHKwIMScGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA%3D%3D&amp;ccb=9-4&amp;oh=00_AfDy0ZOkwfJYnhRS_idmumU49iMJeMtS7tYJrP6JYzUuvA&amp;oe=6419732A&amp;_nc_sid=ea0b6e&amp;_nc_rid=41a62ec7f3" data-carousel="" data-id="sbi_18207510097209464" data-user="greatblueresorts" data-url="https://www.instagram.com/reel/CpnSjQFgqao/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                        <svg style="color: rgba(255,255,255,1)" class="svg-inline--fa fa-play fa-w-14 sbi_playbtn" aria-label="Play" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
                        <svg style="color: rgba(255,255,255,1)" class="svg-inline--fa fa-play fa-w-14 sbi_playbtn" aria-label="Play" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/reel/CpnSjQFgqao/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/333363604_254501130233313_6846080317977905711_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/333363604_254501130233313_6846080317977905711_n.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=mok6aWjaVPIAX_f9AXH&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAsoxhVkCViMlLbn1D5r7QyjZlFKQfjdW4tmUQDnSB1rA&amp;oe=641DC345&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/333363604_254501130233313_6846080317977905711_n.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=mok6aWjaVPIAX_f9AXH&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAsoxhVkCViMlLbn1D5r7QyjZlFKQfjdW4tmUQDnSB1rA&amp;oe=641DC345&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/333363604_254501130233313_6846080317977905711_n.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=mok6aWjaVPIAX_f9AXH&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAsoxhVkCViMlLbn1D5r7QyjZlFKQfjdW4tmUQDnSB1rA&amp;oe=641DC345&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/333363604_254501130233313_6846080317977905711_n.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=mok6aWjaVPIAX_f9AXH&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAsoxhVkCViMlLbn1D5r7QyjZlFKQfjdW4tmUQDnSB1rA&amp;oe=641DC345&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/333363604_254501130233313_6846080317977905711_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/333363604_254501130233313_6846080317977905711_nlow.jpg" alt="There’s nothing more peaceful than a summer morning at Bellmere Winds Golf Resort ⛳️

With spring just around the corner, make sure to book your 2023 vacation in The Kawarthas before it’s too late!

Visit the link in our bio today to select your preferred accommodations for your cottage country getaway.

📸 @mgd_mediaco

#GreatBlueResorts #OntarioCottageRental #OntarioCottageRentals #CottageRental #CottageRentals #CottageCountry #CottageCountryOntario #CottageWeekend #CottageVacation #OntarioTravel #OntarioTourism #Spring2023 #VacationPlanning #ExploreOntario #DiscoverOntario #OntarioAdventure #OntarioLiving #OntarioAdventures" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_carousel" id="sbi_17969066609060909" data-date="1678393532" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/335634362_518273067141990_4997576048362242591_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=DTZTXDlJoyEAX9D9cMY&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD52IbqrSXDTCL1VXCezEPaO6dfdjet1Z-luEpcyYUHnQ&amp;oe=641C6802" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Spend four seasons in The Saugeen model at Villages Port Elgin! 🏡<br>
<br>
This model features spacious and comfortable resort living with 2 bedrooms and 2 bathrooms plus 1,008 sq.ft. of interior space and 192 sq.ft. covered porch for even more room, and a total combined space of 1,200 sq.ft.<br>
<br>
The Saugeen is the perfect model for couples, friends and family to enjoy, all year-round!<br>
<br>
Visit the link in our bio to book a VIP Discovery Tour for this model today.<br>
<br>
#GreatBlueResorts #CottageCountry #OntarioCottageCountry #OntarioCottages #OntarioCottage #CottageCountryOntario #CottageLiving #DiscoverOntario #TravelOntario #OntarioTravel #ExploreOntario #LakeLife #CottageLiving #CottageSale #CottageSales #CottageOwnership #OntarioCottages #OntarioCottage" data-video="" data-carousel="{&quot;data&quot;:[{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335634362_518273067141990_4997576048362242591_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=DTZTXDlJoyEAX9D9cMY&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD52IbqrSXDTCL1VXCezEPaO6dfdjet1Z-luEpcyYUHnQ&amp;oe=641C6802&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335266071_215847764306044_1198990039247760441_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=FEeGS3S6ixwAX_QO_51&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB4GSjhk-aCA0VHm-4_xz2brdRQSXwmbtdbDXnlz9OGEA&amp;oe=641D3DE0&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335423814_542183101371127_7073359775247333923_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=pdUnAlGUl10AX_towOU&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDwjM04v3Q_AFaXa0K0uXeBHXHWr2HGIfC5Ak5gBhWuBw&amp;oe=641CF73C&quot;}],&quot;vid_first&quot;:false}" data-id="sbi_17969066609060909" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CplN2R_O0ul/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>
                        <svg class="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                        </svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CplN2R_O0ul/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/335634362_518273067141990_4997576048362242591_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335634362_518273067141990_4997576048362242591_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=DTZTXDlJoyEAX9D9cMY&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD52IbqrSXDTCL1VXCezEPaO6dfdjet1Z-luEpcyYUHnQ&amp;oe=641C6802&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335634362_518273067141990_4997576048362242591_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=DTZTXDlJoyEAX9D9cMY&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD52IbqrSXDTCL1VXCezEPaO6dfdjet1Z-luEpcyYUHnQ&amp;oe=641C6802&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335634362_518273067141990_4997576048362242591_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=DTZTXDlJoyEAX9D9cMY&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD52IbqrSXDTCL1VXCezEPaO6dfdjet1Z-luEpcyYUHnQ&amp;oe=641C6802&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/335634362_518273067141990_4997576048362242591_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=DTZTXDlJoyEAX9D9cMY&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD52IbqrSXDTCL1VXCezEPaO6dfdjet1Z-luEpcyYUHnQ&amp;oe=641C6802&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/335634362_518273067141990_4997576048362242591_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/335634362_518273067141990_4997576048362242591_nlow.jpg" alt="Spend four seasons in The Saugeen model at Villages Port Elgin! 🏡

This model features spacious and comfortable resort living with 2 bedrooms and 2 bathrooms plus 1,008 sq.ft. of interior space and 192 sq.ft. covered porch for even more room, and a total combined space of 1,200 sq.ft.

The Saugeen is the perfect model for couples, friends and family to enjoy, all year-round!

Visit the link in our bio to book a VIP Discovery Tour for this model today.

#GreatBlueResorts #CottageCountry #OntarioCottageCountry #OntarioCottages #OntarioCottage #CottageCountryOntario #CottageLiving #DiscoverOntario #TravelOntario #OntarioTravel #ExploreOntario #LakeLife #CottageLiving #CottageSale #CottageSales #CottageOwnership #OntarioCottages #OntarioCottage" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_video" id="sbi_18043248901418165" data-date="1678138053" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t51.29350-15/334464490_214702281043025_2230222965439854216_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=net_Iz2JkboAX9Wm8UO&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfC84dezVMKZ6m5WyCEjg43hqQhlQC4psEmKGk5OhcTZeg&amp;oe=641CB45C" rel="nofollow noopener" data-lightbox-sbi="1" data-title="That is a wrap on a fantastic weekend at #TheBigRVShow 🎉<br>
<br>
Thank you to everyone who came out to visit us at the Great Blue Resorts booth over the course of the weekend!<br>
<br>
Visitors over the course of the weekend had the chance to speak with our Cottage Sales Experts about resort cottage ownership, tour various models, try our VR experience, and spin to win various prizes!<br>
<br>
If you’re looking to learn more about resort cottage ownership or have follow-up questions answered, visit the link in our bio today.<br>
<br>
#GreatBlueResorts #CottageOwnership #CottageOwner #CottageSale #CottageSales #TorontoRVShow #TorontoCampingShow #TheBigOne #TorontoRVandCampingShow #Mississauga #TorontoTradeShow #OntarioCottages #OntarioCottage #OntarioCottageCountry #CottageCountryOntario #OntarioLiving #OntarioRealEstate #CottageLife" data-video="https://video-yyz1-1.cdninstagram.com/o1/v/t16/f1/m82/C74C5A65FD11EF3CF47633DD8486EABD_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&amp;_nc_ht=video-yyz1-1.cdninstagram.com&amp;_nc_cat=109&amp;vs=181733704580774_3293619351&amp;_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9DNzRDNUE2NUZEMTFFRjNDRjQ3NjMzREQ4NDg2RUFCRF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0hxRjhSUDk3eXRyNGxBREFHNDRhTDBrbTZrQ2JxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmtrye5MWd6j8VAigCQzMsF0BKqp%2B%2Bdsi0GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA%3D%3D&amp;ccb=9-4&amp;oh=00_AfB9wA6dQ4DrZhqjg1EU08tNNz11YVQ35Yve5Wdvg0Lmlg&amp;oe=6419C0FD&amp;_nc_sid=ea0b6e&amp;_nc_rid=fcd148ace9" data-carousel="" data-id="sbi_18043248901418165" data-user="greatblueresorts" data-url="https://www.instagram.com/reel/CpdmdR8AHpr/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                        <svg style="color: rgba(255,255,255,1)" class="svg-inline--fa fa-play fa-w-14 sbi_playbtn" aria-label="Play" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
                        <svg style="color: rgba(255,255,255,1)" class="svg-inline--fa fa-play fa-w-14 sbi_playbtn" aria-label="Play" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/reel/CpdmdR8AHpr/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/334464490_214702281043025_2230222965439854216_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/334464490_214702281043025_2230222965439854216_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=net_Iz2JkboAX9Wm8UO&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfC84dezVMKZ6m5WyCEjg43hqQhlQC4psEmKGk5OhcTZeg&amp;oe=641CB45C&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/334464490_214702281043025_2230222965439854216_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=net_Iz2JkboAX9Wm8UO&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfC84dezVMKZ6m5WyCEjg43hqQhlQC4psEmKGk5OhcTZeg&amp;oe=641CB45C&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/334464490_214702281043025_2230222965439854216_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=net_Iz2JkboAX9Wm8UO&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfC84dezVMKZ6m5WyCEjg43hqQhlQC4psEmKGk5OhcTZeg&amp;oe=641CB45C&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/334464490_214702281043025_2230222965439854216_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=net_Iz2JkboAX9Wm8UO&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfC84dezVMKZ6m5WyCEjg43hqQhlQC4psEmKGk5OhcTZeg&amp;oe=641CB45C&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/334464490_214702281043025_2230222965439854216_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/334464490_214702281043025_2230222965439854216_nlow.jpg" alt="That is a wrap on a fantastic weekend at #TheBigRVShow 🎉

Thank you to everyone who came out to visit us at the Great Blue Resorts booth over the course of the weekend!

Visitors over the course of the weekend had the chance to speak with our Cottage Sales Experts about resort cottage ownership, tour various models, try our VR experience, and spin to win various prizes!

If you’re looking to learn more about resort cottage ownership or have follow-up questions answered, visit the link in our bio today.

#GreatBlueResorts #CottageOwnership #CottageOwner #CottageSale #CottageSales #TorontoRVShow #TorontoCampingShow #TheBigOne #TorontoRVandCampingShow #Mississauga #TorontoTradeShow #OntarioCottages #OntarioCottage #OntarioCottageCountry #CottageCountryOntario #OntarioLiving #OntarioRealEstate #CottageLife" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_video" id="sbi_18056029771391740" data-date="1677777843" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t51.29350-15/331794953_532754788993491_3662806299416489827_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=OQKPIyneEKYAX9iUZfe&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB5Y1kJYdDObBJsCOabSUqU8Wce5yVGr-Nh-UAekQSmyQ&amp;oe=641C51A1" rel="nofollow noopener" data-lightbox-sbi="1" data-title="The wait is finally over! 🗓️<br>
<br>
Come see us at Booth #510 today through Sunday at the International Centre to:<br>
<br>
➡️ Take a spin on our prize wheel to win fantastic prizes<br>
➡️ Have your resort cottage ownership questions answered by Cottage Sales Experts<br>
➡️ Take advantage of incredible savings.<br>
<br>
#GreatBlueResorts #CottageCountryOntario #ExploreOntario #DiscoverOntario #YoursToDiscover #CottageSales #CottageSale #CottageOwnership #CottageOwner #TheBigOne #TheBigRVShow #CampInCanada #RVLife #Ontario #OntarioTravel #TravelOntario #Contest #OntarioOutdoors #Summer2023 #InternationalCentre #Mississauga" data-video="https://video-yyz1-1.cdninstagram.com/o1/v/t16/f1/m82/524B9A85B0B4E5D2ED2E9BF325015A94_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcyJ9&amp;_nc_ht=video-yyz1-1.cdninstagram.com&amp;_nc_cat=103&amp;vs=965550534625670_2015773296&amp;_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC81MjRCOUE4NUIwQjRFNUQyRUQyRTlCRjMyNTAxNUE5NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0gxQTZSTmxNMUZOOFU0REFBQWRvQlBGYkx3S2JxX0VBQUFGFQICyAEAKAAYABsBiAd1c2Vfb2lsATEVAAAmoMXymLDIi0AVAigCQzMsF0AUMzMzMzMzGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHUAAA%3D%3D&amp;ccb=9-4&amp;oh=00_AfDB-2ZS3Yc5RPaXfxscbWbcKAwzUM5KS2IWKi979oPlbg&amp;oe=6419C6B1&amp;_nc_sid=ea0b6e&amp;_nc_rid=7bcba21a7b" data-carousel="" data-id="sbi_18056029771391740" data-user="greatblueresorts" data-url="https://www.instagram.com/reel/CpS3fFwAz7o/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                        <svg style="color: rgba(255,255,255,1)" class="svg-inline--fa fa-play fa-w-14 sbi_playbtn" aria-label="Play" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
                        <svg style="color: rgba(255,255,255,1)" class="svg-inline--fa fa-play fa-w-14 sbi_playbtn" aria-label="Play" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/reel/CpS3fFwAz7o/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331794953_532754788993491_3662806299416489827_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/331794953_532754788993491_3662806299416489827_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=OQKPIyneEKYAX9iUZfe&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB5Y1kJYdDObBJsCOabSUqU8Wce5yVGr-Nh-UAekQSmyQ&amp;oe=641C51A1&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/331794953_532754788993491_3662806299416489827_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=OQKPIyneEKYAX9iUZfe&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB5Y1kJYdDObBJsCOabSUqU8Wce5yVGr-Nh-UAekQSmyQ&amp;oe=641C51A1&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/331794953_532754788993491_3662806299416489827_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=OQKPIyneEKYAX9iUZfe&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB5Y1kJYdDObBJsCOabSUqU8Wce5yVGr-Nh-UAekQSmyQ&amp;oe=641C51A1&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.29350-15\/331794953_532754788993491_3662806299416489827_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=OQKPIyneEKYAX9iUZfe&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB5Y1kJYdDObBJsCOabSUqU8Wce5yVGr-Nh-UAekQSmyQ&amp;oe=641C51A1&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331794953_532754788993491_3662806299416489827_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331794953_532754788993491_3662806299416489827_nlow.jpg" alt="The wait is finally over! 🗓️

Come see us at Booth #510 today through Sunday at the International Centre to:

➡️ Take a spin on our prize wheel to win fantastic prizes
➡️ Have your resort cottage ownership questions answered by Cottage Sales Experts
➡️ Take advantage of incredible savings.

#GreatBlueResorts #CottageCountryOntario #ExploreOntario #DiscoverOntario #YoursToDiscover #CottageSales #CottageSale #CottageOwnership #CottageOwner #TheBigOne #TheBigRVShow #CampInCanada #RVLife #Ontario #OntarioTravel #TravelOntario #Contest #OntarioOutdoors #Summer2023 #InternationalCentre #Mississauga" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_carousel" id="sbi_17939228456616157" data-date="1677707108" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/334452436_123281574015570_5843511093787090057_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=LZIgcBCx0-MAX_sPRL1&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDiMNrKuQGyMwHKFumVNn6BQoSmw3I2otIbJqa3_N3vuQ&amp;oe=641C515F" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Congratulations to the winners of the Toronto Spring Camping &amp; RV Show ticket contest!🎉<br>
<br>
Swipe to see the lucky winners of a pair of tickets to this weekend's show at the International Centre 👉<br>
<br>
All winners will be contacted shortly via email with further details on how to claim your prize. Thank you to everyone who entered the contest! <br>
<br>
We're looking forward to seeing you this weekend!👋<br>
<br>
#GreatBlueResorts #CottageOwnership #CottageOwner #CottageSale #CottageSales #TorontoRVShow #TorontoCampingShow #TheBigOne #TorontoRVandCampingShow #Mississauga #TorontoTradeShow #OntarioCottages #OntarioCottage #OntarioCottageCountry #CottageCountryOntario #OntarioLiving #OntarioRealEstate #CottageLife" data-video="" data-carousel="{&quot;data&quot;:[{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/334452436_123281574015570_5843511093787090057_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=LZIgcBCx0-MAX_sPRL1&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDiMNrKuQGyMwHKFumVNn6BQoSmw3I2otIbJqa3_N3vuQ&amp;oe=641C515F&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/334542875_1399775444104009_4794693548317632685_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=ua1TwMENXy4AX-NbpqW&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfD-hgbmcjp-0kUUDDDo4ckOSXIevC2onV-lE0-qzRqnjw&amp;oe=641C5378&quot;}],&quot;vid_first&quot;:false}" data-id="sbi_17939228456616157" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CpQwmP6jqmc/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>
                        <svg class="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                        </svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CpQwmP6jqmc/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/334452436_123281574015570_5843511093787090057_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/334452436_123281574015570_5843511093787090057_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=LZIgcBCx0-MAX_sPRL1&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDiMNrKuQGyMwHKFumVNn6BQoSmw3I2otIbJqa3_N3vuQ&amp;oe=641C515F&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/334452436_123281574015570_5843511093787090057_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=LZIgcBCx0-MAX_sPRL1&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDiMNrKuQGyMwHKFumVNn6BQoSmw3I2otIbJqa3_N3vuQ&amp;oe=641C515F&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/334452436_123281574015570_5843511093787090057_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=LZIgcBCx0-MAX_sPRL1&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDiMNrKuQGyMwHKFumVNn6BQoSmw3I2otIbJqa3_N3vuQ&amp;oe=641C515F&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/334452436_123281574015570_5843511093787090057_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=LZIgcBCx0-MAX_sPRL1&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDiMNrKuQGyMwHKFumVNn6BQoSmw3I2otIbJqa3_N3vuQ&amp;oe=641C515F&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/334452436_123281574015570_5843511093787090057_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/334452436_123281574015570_5843511093787090057_nlow.jpg" alt="Congratulations to the winners of the Toronto Spring Camping &amp; RV Show ticket contest!🎉

Swipe to see the lucky winners of a pair of tickets to this weekend's show at the International Centre 👉

All winners will be contacted shortly via email with further details on how to claim your prize. Thank you to everyone who entered the contest! 

We're looking forward to seeing you this weekend!👋

#GreatBlueResorts #CottageOwnership #CottageOwner #CottageSale #CottageSales #TorontoRVShow #TorontoCampingShow #TheBigOne #TorontoRVandCampingShow #Mississauga #TorontoTradeShow #OntarioCottages #OntarioCottage #OntarioCottageCountry #CottageCountryOntario #OntarioLiving #OntarioRealEstate #CottageLife" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_image" id="sbi_18093087055315622" data-date="1677612299" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/334195669_875117003550281_6588410792990636939_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=I00c3iWElKEAX_uRD9e&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBuh5rqzJCGVtccKHFWjg7HG-Vr4KiUhr9cR3JqCbIGzA&amp;oe=641DEBB6" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Spend your summer days exploring Muskoka, The Kawarthas, Perth, Prince Edward County, or the Saugeen Shores with your very own Resort Cottage at a Great Blue Resort!🙌<br>
<br>
Enjoy a carefree lifestyle on clean, safe, well-maintained resorts with beautiful views. <br>
<br>
Have any questions about resort cottage ownership? Contact us today to speak with one of our knowledgeable Cottage Sales Experts or visit the link in our bio!<br>
<br>
📸 @hollzor_ <br>
<br>
#GreatBlueResorts #CottageSale #CottageSales #CottagesForSale #CottageRealEstate #OntarioCottage #OntarioCottages #CottageCountryOntario #OntarioCottageCountry #CottageOwner #CottageLiving #OntarioRealEstate #Muskoka #Kawarthas #PerthOntario #PrinceEdwardCounty" data-video="" data-carousel="" data-id="sbi_18093087055315622" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CpN7w5JuaG2/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CpN7w5JuaG2/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/334195669_875117003550281_6588410792990636939_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/334195669_875117003550281_6588410792990636939_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=I00c3iWElKEAX_uRD9e&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBuh5rqzJCGVtccKHFWjg7HG-Vr4KiUhr9cR3JqCbIGzA&amp;oe=641DEBB6&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/334195669_875117003550281_6588410792990636939_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=I00c3iWElKEAX_uRD9e&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBuh5rqzJCGVtccKHFWjg7HG-Vr4KiUhr9cR3JqCbIGzA&amp;oe=641DEBB6&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/334195669_875117003550281_6588410792990636939_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=I00c3iWElKEAX_uRD9e&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBuh5rqzJCGVtccKHFWjg7HG-Vr4KiUhr9cR3JqCbIGzA&amp;oe=641DEBB6&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/334195669_875117003550281_6588410792990636939_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=I00c3iWElKEAX_uRD9e&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBuh5rqzJCGVtccKHFWjg7HG-Vr4KiUhr9cR3JqCbIGzA&amp;oe=641DEBB6&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/334195669_875117003550281_6588410792990636939_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/334195669_875117003550281_6588410792990636939_nlow.jpg" alt="Spend your summer days exploring Muskoka, The Kawarthas, Perth, Prince Edward County, or the Saugeen Shores with your very own Resort Cottage at a Great Blue Resort!🙌

Enjoy a carefree lifestyle on clean, safe, well-maintained resorts with beautiful views. 

Have any questions about resort cottage ownership? Contact us today to speak with one of our knowledgeable Cottage Sales Experts or visit the link in our bio!

📸 @hollzor_ 

#GreatBlueResorts #CottageSale #CottageSales #CottagesForSale #CottageRealEstate #OntarioCottage #OntarioCottages #CottageCountryOntario #OntarioCottageCountry #CottageOwner #CottageLiving #OntarioRealEstate #Muskoka #Kawarthas #PerthOntario #PrinceEdwardCounty" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_image" id="sbi_17945887493579583" data-date="1677283206" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/333045273_738925951136747_7732772071553079569_n.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2rOMC2UDcj0AX9IOLZR&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB12TUmzVkSx4596fxU3VPbJ94GGoMMiQqQEK3orycZbQ&amp;oe=641C670C" rel="nofollow noopener" data-lightbox-sbi="1" data-title="THE COUNTDOWN TO THE BIG RV SHOW IS ON!🗓<br>
<br>
We're only 6 days away from the Toronto Spring Camping &amp; RV Show at the International Centre in Mississauga and we couldn't be more excited!<br>
<br>
Be our VIP Guest and walk-through several of our beautiful resort cottage models, learn all about resort cottage ownership and our resorts including our first 4 season property, spin to win fantastic prizes, and take advantage of incredible savings with our show specials! <br>
<br>
Be sure to stop by Booth #510 where the Great Blue Resorts team will be ready to answer all of your questions. Plus, you can enter to win a FREE two-night resort cottage getaway. <br>
<br>
Visit the link in our bio to learn more about our early bird promotions including saving up to $20,000 on our inventory clearout. <br>
<br>
We look forward to seeing you there! 👋 <br>
<br>
#GreatBlueResorts #CottageCountryOntario #ExploreOntario #DiscoverOntario #YoursToDiscover #CottageSales #CottageSale #CottageOwnership #CottageOwner #TheBigOne #TheBigRVShow #CampInCanada #RVLife #Ontario #OntarioTravel #TravelOntario #Contest #OntarioOutdoors #Summer2023 #InternationalCentre #Mississauga" data-video="" data-carousel="" data-id="sbi_17945887493579583" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CpEIEVbJ3oY/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CpEIEVbJ3oY/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/333045273_738925951136747_7732772071553079569_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/333045273_738925951136747_7732772071553079569_n.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2rOMC2UDcj0AX9IOLZR&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB12TUmzVkSx4596fxU3VPbJ94GGoMMiQqQEK3orycZbQ&amp;oe=641C670C&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/333045273_738925951136747_7732772071553079569_n.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2rOMC2UDcj0AX9IOLZR&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB12TUmzVkSx4596fxU3VPbJ94GGoMMiQqQEK3orycZbQ&amp;oe=641C670C&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/333045273_738925951136747_7732772071553079569_n.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2rOMC2UDcj0AX9IOLZR&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB12TUmzVkSx4596fxU3VPbJ94GGoMMiQqQEK3orycZbQ&amp;oe=641C670C&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/333045273_738925951136747_7732772071553079569_n.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2rOMC2UDcj0AX9IOLZR&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB12TUmzVkSx4596fxU3VPbJ94GGoMMiQqQEK3orycZbQ&amp;oe=641C670C&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/333045273_738925951136747_7732772071553079569_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/333045273_738925951136747_7732772071553079569_nlow.jpg" alt="THE COUNTDOWN TO THE BIG RV SHOW IS ON!🗓

We're only 6 days away from the Toronto Spring Camping &amp; RV Show at the International Centre in Mississauga and we couldn't be more excited!

Be our VIP Guest and walk-through several of our beautiful resort cottage models, learn all about resort cottage ownership and our resorts including our first 4 season property, spin to win fantastic prizes, and take advantage of incredible savings with our show specials! 

Be sure to stop by Booth #510 where the Great Blue Resorts team will be ready to answer all of your questions. Plus, you can enter to win a FREE two-night resort cottage getaway. 

Visit the link in our bio to learn more about our early bird promotions including saving up to $20,000 on our inventory clearout. 

We look forward to seeing you there! 👋 

#GreatBlueResorts #CottageCountryOntario #ExploreOntario #DiscoverOntario #YoursToDiscover #CottageSales #CottageSale #CottageOwnership #CottageOwner #TheBigOne #TheBigRVShow #CampInCanada #RVLife #Ontario #OntarioTravel #TravelOntario #Contest #OntarioOutdoors #Summer2023 #InternationalCentre #Mississauga" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_carousel" id="sbi_17978026994001403" data-date="1677168519" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/332860447_725885679147098_7398942796994711084_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=uag8EuiLbawAX8LQLha&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAUTUWib8YMyvHLfrewSHB9GVuqhlnBT7LxKRmb0Q3nQA&amp;oe=641D4E13" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Discover four season resort living in Port Elgin!<br>
<br>
The 4 season Lyal combines good design and quality workmanship. This model features 2 bedrooms, 1 bathroom, 828 sq.ft. interior with 204 sq.ft. exterior deck, for a total of 1,032 sq.ft. of resort living and relaxing, year-round!<br>
<br>
RV Show Special Offer – Save $30,000! <br>
SALE PRICE: $229,900* <br>
<br>
Visit us at Booth #510 during the Toronto Spring Camping &amp; RV Show between March 2-5 at the International Centre in Mississauga and save $30,000 when you purchase the 4 season Lyal unit, exclusive to Villages Port Elgin. <br>
<br>
Visit the link in our bio to learn more about this model today. <br>
<br>
#GreatBlueResorts #CottageCountry #OntarioCottageCountry #OntarioCottages #OntarioCottage #CottageCountryOntario #CottageLiving #DiscoverOntario #TravelOntario #OntarioTravel #ExploreOntario #LakeLife #CottageLiving #CottageSale #CottageSales #CottageOwnership #OntarioCottages #OntarioCottage" data-video="" data-carousel="{&quot;data&quot;:[{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332860447_725885679147098_7398942796994711084_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=uag8EuiLbawAX8LQLha&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAUTUWib8YMyvHLfrewSHB9GVuqhlnBT7LxKRmb0Q3nQA&amp;oe=641D4E13&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332933232_3578037072424528_7825020371155102460_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=EepxOQKay-sAX_MioGM&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBdukgTZK9r0tS6y6Cjji6wTVJDeuZz9Otfq5NYrOXoOw&amp;oe=641DF5E0&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/333037164_1251644482448915_2513852275298168152_n.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=U5K__8mDZcQAX8EsTkC&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDldDlj4J78QmW64GIrrAURrurBQ8UhZ7pvAdTehjEmLA&amp;oe=641C3DDF&quot;}],&quot;vid_first&quot;:false}" data-id="sbi_17978026994001403" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CpAtUflO-Ut/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>
                        <svg class="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                        </svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CpAtUflO-Ut/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/332860447_725885679147098_7398942796994711084_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332860447_725885679147098_7398942796994711084_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=uag8EuiLbawAX8LQLha&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAUTUWib8YMyvHLfrewSHB9GVuqhlnBT7LxKRmb0Q3nQA&amp;oe=641D4E13&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332860447_725885679147098_7398942796994711084_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=uag8EuiLbawAX8LQLha&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAUTUWib8YMyvHLfrewSHB9GVuqhlnBT7LxKRmb0Q3nQA&amp;oe=641D4E13&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332860447_725885679147098_7398942796994711084_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=uag8EuiLbawAX8LQLha&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAUTUWib8YMyvHLfrewSHB9GVuqhlnBT7LxKRmb0Q3nQA&amp;oe=641D4E13&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332860447_725885679147098_7398942796994711084_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=uag8EuiLbawAX8LQLha&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAUTUWib8YMyvHLfrewSHB9GVuqhlnBT7LxKRmb0Q3nQA&amp;oe=641D4E13&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/332860447_725885679147098_7398942796994711084_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/332860447_725885679147098_7398942796994711084_nlow.jpg" alt="Discover four season resort living in Port Elgin!

The 4 season Lyal combines good design and quality workmanship. This model features 2 bedrooms, 1 bathroom, 828 sq.ft. interior with 204 sq.ft. exterior deck, for a total of 1,032 sq.ft. of resort living and relaxing, year-round!

RV Show Special Offer – Save $30,000! 
SALE PRICE: $229,900* 

Visit us at Booth #510 during the Toronto Spring Camping &amp; RV Show between March 2-5 at the International Centre in Mississauga and save $30,000 when you purchase the 4 season Lyal unit, exclusive to Villages Port Elgin. 

Visit the link in our bio to learn more about this model today. 

#GreatBlueResorts #CottageCountry #OntarioCottageCountry #OntarioCottages #OntarioCottage #CottageCountryOntario #CottageLiving #DiscoverOntario #TravelOntario #OntarioTravel #ExploreOntario #LakeLife #CottageLiving #CottageSale #CottageSales #CottageOwnership #OntarioCottages #OntarioCottage" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_image" id="sbi_17999072707720524" data-date="1677090222" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/332871600_1572593229833306_4710554220670268321_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=qehDNL4qI8EAX9qUfpq&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBRMKBftw0bsObi3_sco32KkwuV8Z_m1GcAMkSijSxBYg&amp;oe=641DEB0E" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Cherry Beach Resort is an unmatched destination in the heart of cottage country for your 2023 vacation ☀️<br>
<br>
While you're here enjoy all-inclusive amenities from the beach to hiking trails, paddle board rentals, and more!<br>
<br>
Visit the link in our bio to book your vacation in Prince Edward County today!<br>
<br>
📸 @lubumakeup <br>
<br>
#GreatBlueResorts #OntarioCottageRental #OntarioCottageRentals #CottageRental #CottageRentals #CottageCountry #CottageCountryOntario #ExploreOntario #DiscoverOntario #OntarioAdventure #OntarioLiving #OntarioAdventures #CottageWeekend #CottageVacation #OntarioTravel #OntarioTourism #Spring2023 #VacationPlanning" data-video="" data-carousel="" data-id="sbi_17999072707720524" data-user="greatblueresorts" data-url="https://www.instagram.com/p/Co-X-vauXAH/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/Co-X-vauXAH/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/332871600_1572593229833306_4710554220670268321_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332871600_1572593229833306_4710554220670268321_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=qehDNL4qI8EAX9qUfpq&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBRMKBftw0bsObi3_sco32KkwuV8Z_m1GcAMkSijSxBYg&amp;oe=641DEB0E&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332871600_1572593229833306_4710554220670268321_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=qehDNL4qI8EAX9qUfpq&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBRMKBftw0bsObi3_sco32KkwuV8Z_m1GcAMkSijSxBYg&amp;oe=641DEB0E&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332871600_1572593229833306_4710554220670268321_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=qehDNL4qI8EAX9qUfpq&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBRMKBftw0bsObi3_sco32KkwuV8Z_m1GcAMkSijSxBYg&amp;oe=641DEB0E&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332871600_1572593229833306_4710554220670268321_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=qehDNL4qI8EAX9qUfpq&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBRMKBftw0bsObi3_sco32KkwuV8Z_m1GcAMkSijSxBYg&amp;oe=641DEB0E&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/332871600_1572593229833306_4710554220670268321_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/332871600_1572593229833306_4710554220670268321_nlow.jpg" alt="Cherry Beach Resort is an unmatched destination in the heart of cottage country for your 2023 vacation ☀️

While you're here enjoy all-inclusive amenities from the beach to hiking trails, paddle board rentals, and more!

Visit the link in our bio to book your vacation in Prince Edward County today!

📸 @lubumakeup 

#GreatBlueResorts #OntarioCottageRental #OntarioCottageRentals #CottageRental #CottageRentals #CottageCountry #CottageCountryOntario #ExploreOntario #DiscoverOntario #OntarioAdventure #OntarioLiving #OntarioAdventures #CottageWeekend #CottageVacation #OntarioTravel #OntarioTourism #Spring2023 #VacationPlanning" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_image" id="sbi_17996778550663958" data-date="1676995839" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/332591023_756131445937119_1053514958196956805_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Cb6Z5m_-KPcAX_2IdzF&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfColRaKjj3G8HnTcUStDh24-SjYPEN8XiSTOiNL-BbwDw&amp;oe=641D2417" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Don’t miss your chance to attend the #TheBigRVShow March 2nd - 5th, 2023 at the International Centre in Mississauga!<br>
<br>
To celebrate our attendance we are giving away 1 of 25 pairs of tickets. 🎉<br>
<br>
To enter, simply:<br>
➡️ Submit your online ballot at the link in our bio<br>
➡️ Follow Great Blue Resorts on Facebook and Instagram!<br>
<br>
Bonus entry, tag a friend you'd love to be your guest to receive an additional ballot. Every tag submitted will give you more chances to win!<br>
<br>
Contest Ends: February 28th, 2023<br>
<br>
Already have your tickets? Make sure to drop by booth #510 to take a walk-through several of our beautiful resort cottage models, learn all about resort cottage ownership and our resorts, and take advantage of incredible savings with our show specials! <br>
<br>
Good luck! <br>
<br>
#GreatBlueResorts #CottageCountryOntario #ExploreOntario #DiscoverOntario #YoursToDiscover #CottageSales #CottageSale #CottageOwnership #CottageOwner #TheBigOne #TheBigRVShow #CampInCanada #RVLife #Ontario #OntarioTravel #TravelOntario #Contest #OntarioOutdoors #Summer2023 #InternationalCentre #Mississauga" data-video="" data-carousel="" data-id="sbi_17996778550663958" data-user="greatblueresorts" data-url="https://www.instagram.com/p/Co7j9b8uJFm/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/Co7j9b8uJFm/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/332591023_756131445937119_1053514958196956805_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332591023_756131445937119_1053514958196956805_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Cb6Z5m_-KPcAX_2IdzF&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfColRaKjj3G8HnTcUStDh24-SjYPEN8XiSTOiNL-BbwDw&amp;oe=641D2417&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332591023_756131445937119_1053514958196956805_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Cb6Z5m_-KPcAX_2IdzF&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfColRaKjj3G8HnTcUStDh24-SjYPEN8XiSTOiNL-BbwDw&amp;oe=641D2417&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332591023_756131445937119_1053514958196956805_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Cb6Z5m_-KPcAX_2IdzF&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfColRaKjj3G8HnTcUStDh24-SjYPEN8XiSTOiNL-BbwDw&amp;oe=641D2417&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/332591023_756131445937119_1053514958196956805_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Cb6Z5m_-KPcAX_2IdzF&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfColRaKjj3G8HnTcUStDh24-SjYPEN8XiSTOiNL-BbwDw&amp;oe=641D2417&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/332591023_756131445937119_1053514958196956805_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/332591023_756131445937119_1053514958196956805_nlow.jpg" alt="Don’t miss your chance to attend the #TheBigRVShow March 2nd - 5th, 2023 at the International Centre in Mississauga!

To celebrate our attendance we are giving away 1 of 25 pairs of tickets. 🎉

To enter, simply:
➡️ Submit your online ballot at the link in our bio
➡️ Follow Great Blue Resorts on Facebook and Instagram!

Bonus entry, tag a friend you'd love to be your guest to receive an additional ballot. Every tag submitted will give you more chances to win!

Contest Ends: February 28th, 2023

Already have your tickets? Make sure to drop by booth #510 to take a walk-through several of our beautiful resort cottage models, learn all about resort cottage ownership and our resorts, and take advantage of incredible savings with our show specials! 

Good luck! 

#GreatBlueResorts #CottageCountryOntario #ExploreOntario #DiscoverOntario #YoursToDiscover #CottageSales #CottageSale #CottageOwnership #CottageOwner #TheBigOne #TheBigRVShow #CampInCanada #RVLife #Ontario #OntarioTravel #TravelOntario #Contest #OntarioOutdoors #Summer2023 #InternationalCentre #Mississauga" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_carousel" id="sbi_17960361446350416" data-date="1676653207" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/331012942_599890541980423_1133190304585454140_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=KS5AHfiFilEAX8HjRdw&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDVB9Kb59e3H7-313wEQwHfgnYS1vTvBQTzt-CHoL2n5w&amp;oe=641DCD76" rel="nofollow noopener" data-lightbox-sbi="1" data-title="New to the Great Blue Resort Family! Introducing Villages Port Elgin located in Saugeen Shores! 🏡<br>
<br>
Our first four season resort is designed for people who enjoy year-round cottaging in a natural setting but close to every modern convenience. Just minutes from the beautiful blue waters of Lake Huron.<br>
<br>
For a limited time purchase an in-stock Four Season Ashfield model and don't pay HST*!<br>
<br>
To learn more about this exciting new resort, browse available four season models, or to schedule a tour visit the link in @villagesportelgin bio.<br>
<br>
#VillagesPortElgin #Villages #PortElgin #PortElginOn #NewBuild #CommunityLiving #ResortLife  #ResortLiving #TravelOntario #DiscoverOntario #ExploreOntario #OntarioLiving #YoursToDiscover #4SeasonsLiving #BruceCounty #BruceCountyOntario #RealEstateOntario #BruceCountyViews #OntarioBeauty" data-video="" data-carousel="{&quot;data&quot;:[{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331012942_599890541980423_1133190304585454140_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=KS5AHfiFilEAX8HjRdw&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDVB9Kb59e3H7-313wEQwHfgnYS1vTvBQTzt-CHoL2n5w&amp;oe=641DCD76&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331016889_1679682419150651_4235646617417018131_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=FLeiuLR7vFkAX9wEkOE&amp;_nc_oc=AQnuQigZjy-7AaFx21I0_AFQyfpF-0-xpR_rGSwMUbC4amBfj5ShpNuGZtEgHO31cwA&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfB_6OEUbQtUudm-nPlQ8adyrhGH50tzWTaNpVTPA9_4Sw&amp;oe=641CEC14&quot;}],&quot;vid_first&quot;:false}" data-id="sbi_17960361446350416" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CoxWcQLB3jk/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>
                        <svg class="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                        </svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CoxWcQLB3jk/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331012942_599890541980423_1133190304585454140_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331012942_599890541980423_1133190304585454140_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=KS5AHfiFilEAX8HjRdw&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDVB9Kb59e3H7-313wEQwHfgnYS1vTvBQTzt-CHoL2n5w&amp;oe=641DCD76&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331012942_599890541980423_1133190304585454140_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=KS5AHfiFilEAX8HjRdw&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDVB9Kb59e3H7-313wEQwHfgnYS1vTvBQTzt-CHoL2n5w&amp;oe=641DCD76&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331012942_599890541980423_1133190304585454140_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=KS5AHfiFilEAX8HjRdw&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDVB9Kb59e3H7-313wEQwHfgnYS1vTvBQTzt-CHoL2n5w&amp;oe=641DCD76&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331012942_599890541980423_1133190304585454140_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=KS5AHfiFilEAX8HjRdw&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDVB9Kb59e3H7-313wEQwHfgnYS1vTvBQTzt-CHoL2n5w&amp;oe=641DCD76&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331012942_599890541980423_1133190304585454140_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331012942_599890541980423_1133190304585454140_nlow.jpg" alt="New to the Great Blue Resort Family! Introducing Villages Port Elgin located in Saugeen Shores! 🏡

Our first four season resort is designed for people who enjoy year-round cottaging in a natural setting but close to every modern convenience. Just minutes from the beautiful blue waters of Lake Huron.

For a limited time purchase an in-stock Four Season Ashfield model and don't pay HST*!

To learn more about this exciting new resort, browse available four season models, or to schedule a tour visit the link in @villagesportelgin bio.

#VillagesPortElgin #Villages #PortElgin #PortElginOn #NewBuild #CommunityLiving #ResortLife  #ResortLiving #TravelOntario #DiscoverOntario #ExploreOntario #OntarioLiving #YoursToDiscover #4SeasonsLiving #BruceCounty #BruceCountyOntario #RealEstateOntario #BruceCountyViews #OntarioBeauty" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_carousel" id="sbi_17996603356613662" data-date="1676566810" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/331148867_1234730787251651_6599347400985588495_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=jioy3F6jGRwAX8pJr8i&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCfFbpK9dYi8CvLzae5amfoPmM1IpQ446TfLeKtKsLJLA&amp;oe=641DAB72" rel="nofollow noopener" data-lightbox-sbi="1" data-title="CALLING ALL COTTAGE AND OUTDOOR ENTHUSIASTS! <br>
<br>
Join us at the Toronto Spring Camping &amp; RV Show March 2nd- 5th at the International Centre in Mississauga. <br>
<br>
From fantastic prizes to incredible savings on models, here’s a little sneak peek of what you can expect from us at &quot;The Big One” tradeshow 👉<br>
<br>
Be sure to stop by Booth #510 where the Great Blue Resorts team will be ready to answer all of your questions. Plus, you can enter to win a FREE two-night resort cottage getaway. <br>
<br>
Visit the link in our bio to learn more about our early bird promotions including saving up to $20,000 on our inventory clearout.<br>
<br>
#GreatBlueResorts #CottageOwnership #CottageOwner #CottageSale #CottageSales #TorontoRVShow #TorontoCampingShow #TheBigOne #TorontoRVandCampingShow #Mississauga #TorontoTradeShow #OntarioCottages #OntarioCottage #OntarioCottageCountry #CottageCountryOntario #OntarioLiving #OntarioRealEstate #CottageLife" data-video="" data-carousel="{&quot;data&quot;:[{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331148867_1234730787251651_6599347400985588495_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=jioy3F6jGRwAX8pJr8i&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCfFbpK9dYi8CvLzae5amfoPmM1IpQ446TfLeKtKsLJLA&amp;oe=641DAB72&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331317486_1164589594222496_4335605427627408853_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=kLBIJFD0mPEAX8ykEXO&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCVMAElqozox-JE7MXd1l7TTPvW8YNMZEKx-sOicRQ6Fw&amp;oe=641C98FD&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331075486_771474314395522_3117418948809292652_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=w6aGOvc5680AX8_U8w6&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAlAoybMzCeOKCfXcoZop6fFRFQTJqwCrgdZ3QB4TVgzg&amp;oe=641CABA4&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331092569_1421263158643982_6430208240144288196_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=E4cJrdRZcfoAX_YdOTF&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDdS2A4XH5i8xeT9i6M9MRAEY1-ldbjf8MWULaqmYYibw&amp;oe=641DD4ED&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331056862_498926149081163_9062180309239824947_n.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=L0EN-Sxz0IcAX_iBauo&amp;_nc_oc=AQkkQFa9JgnFCzY9__s758mKvl4hhohDCWVNodh504rD04VDdEbShD_Y83TBCMc6w64&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBx1SyfRGh-CcK8xQRBrRXozkZ2RtDy9GvPYDn4hWQf1w&amp;oe=641D9772&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/330996981_744299047350693_1062217743954990008_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=re9w69vBYkAAX_i5PTR&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBiG0QHiTPu4svWk77azSp7JMVLT6L0gYA_vvFvz0M8fQ&amp;oe=641DD58A&quot;}],&quot;vid_first&quot;:false}" data-id="sbi_17996603356613662" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CouxpslMXU5/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>
                        <svg class="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                        </svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CouxpslMXU5/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331148867_1234730787251651_6599347400985588495_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331148867_1234730787251651_6599347400985588495_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=jioy3F6jGRwAX8pJr8i&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCfFbpK9dYi8CvLzae5amfoPmM1IpQ446TfLeKtKsLJLA&amp;oe=641DAB72&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331148867_1234730787251651_6599347400985588495_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=jioy3F6jGRwAX8pJr8i&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCfFbpK9dYi8CvLzae5amfoPmM1IpQ446TfLeKtKsLJLA&amp;oe=641DAB72&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331148867_1234730787251651_6599347400985588495_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=jioy3F6jGRwAX8pJr8i&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCfFbpK9dYi8CvLzae5amfoPmM1IpQ446TfLeKtKsLJLA&amp;oe=641DAB72&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331148867_1234730787251651_6599347400985588495_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=jioy3F6jGRwAX8pJr8i&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCfFbpK9dYi8CvLzae5amfoPmM1IpQ446TfLeKtKsLJLA&amp;oe=641DAB72&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331148867_1234730787251651_6599347400985588495_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331148867_1234730787251651_6599347400985588495_nlow.jpg" alt="CALLING ALL COTTAGE AND OUTDOOR ENTHUSIASTS! 

Join us at the Toronto Spring Camping &amp; RV Show March 2nd- 5th at the International Centre in Mississauga. 

From fantastic prizes to incredible savings on models, here’s a little sneak peek of what you can expect from us at &quot;The Big One” tradeshow 👉

Be sure to stop by Booth #510 where the Great Blue Resorts team will be ready to answer all of your questions. Plus, you can enter to win a FREE two-night resort cottage getaway. 

Visit the link in our bio to learn more about our early bird promotions including saving up to $20,000 on our inventory clearout.

#GreatBlueResorts #CottageOwnership #CottageOwner #CottageSale #CottageSales #TorontoRVShow #TorontoCampingShow #TheBigOne #TorontoRVandCampingShow #Mississauga #TorontoTradeShow #OntarioCottages #OntarioCottage #OntarioCottageCountry #CottageCountryOntario #OntarioLiving #OntarioRealEstate #CottageLife" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_image" id="sbi_17938861835495273" data-date="1676392131" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/331010002_722748079340681_5108382861175016459_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=8IKCarRnD7EAX-O4W1y&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBCxQc0HYBgdiJ_xuU2oUH_Hu4Uc3KnBdzIgNsHkdoG4g&amp;oe=641C26AA" rel="nofollow noopener" data-lightbox-sbi="1" data-title="&quot;A resort cottage so quaint and fair, my heart is full every time I’m there.<br>
<br>
As the moon replaces the setting sun, a day at a Great Blue Resort is full of endless family fun.<br>
<br>
Many years of family memories to be made and family traditions that will last for decades.<br>
<br>
Fill your families' hearts with a Great Blue Resort cottage this Valentine’s Day!<br>
<br>
Great Blue Resorts offers resort cottages that you will fall in love with! 💕<br>
<br>
Become a resort cottage owner from as little as $22,578 down &amp; low weekly payments of $199*.<br>
<br>
Book a discovery tour today for your new home-away-from-home by visiting the link in our bio. <br>
<br>
#GreatBlueResorts #CottageCountry #CouplesGetaway #CouplesVacation #OntarioCottageCountry #OntarioCottage #OntarioCottages #ExploreOntario #YoursToDiscover #OntarioTravel #TravelOntario #OntarioAdventures #ValentinesDay #HappyValentinesDay #CottageLife #CottageLiving" data-video="" data-carousel="" data-id="sbi_17938861835495273" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CopkefBhuSg/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CopkefBhuSg/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331010002_722748079340681_5108382861175016459_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331010002_722748079340681_5108382861175016459_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=8IKCarRnD7EAX-O4W1y&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBCxQc0HYBgdiJ_xuU2oUH_Hu4Uc3KnBdzIgNsHkdoG4g&amp;oe=641C26AA&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331010002_722748079340681_5108382861175016459_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=8IKCarRnD7EAX-O4W1y&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBCxQc0HYBgdiJ_xuU2oUH_Hu4Uc3KnBdzIgNsHkdoG4g&amp;oe=641C26AA&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331010002_722748079340681_5108382861175016459_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=8IKCarRnD7EAX-O4W1y&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBCxQc0HYBgdiJ_xuU2oUH_Hu4Uc3KnBdzIgNsHkdoG4g&amp;oe=641C26AA&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/331010002_722748079340681_5108382861175016459_n.jpg?_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=8IKCarRnD7EAX-O4W1y&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBCxQc0HYBgdiJ_xuU2oUH_Hu4Uc3KnBdzIgNsHkdoG4g&amp;oe=641C26AA&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331010002_722748079340681_5108382861175016459_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/331010002_722748079340681_5108382861175016459_nlow.jpg" alt="&quot;A resort cottage so quaint and fair, my heart is full every time I’m there.

As the moon replaces the setting sun, a day at a Great Blue Resort is full of endless family fun.

Many years of family memories to be made and family traditions that will last for decades.

Fill your families' hearts with a Great Blue Resort cottage this Valentine’s Day!

Great Blue Resorts offers resort cottages that you will fall in love with! 💕

Become a resort cottage owner from as little as $22,578 down &amp; low weekly payments of $199*.

Book a discovery tour today for your new home-away-from-home by visiting the link in our bio. 

#GreatBlueResorts #CottageCountry #CouplesGetaway #CouplesVacation #OntarioCottageCountry #OntarioCottage #OntarioCottages #ExploreOntario #YoursToDiscover #OntarioTravel #TravelOntario #OntarioAdventures #ValentinesDay #HappyValentinesDay #CottageLife #CottageLiving" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_carousel" id="sbi_18003426115559109" data-date="1676310974" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/329614812_1015369679639615_6137080055528095176_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2a7krL4XMoUAX_KT7yq&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDKMD5pyE6vk14vrqEScD7zJ6wa22f5f_Kv95purZQzQA&amp;oe=641D4748" rel="nofollow noopener" data-lightbox-sbi="1" data-title="BIGGER &amp; BETTER THAN EVER! 🏡<br>
<br>
We're excited to announce that we will be exhibiting at the Toronto Spring Camping &amp; RV Show March 2nd - 5th!<br>
<br>
Visit us at Booth #510 and be THE FIRST to:<br>
<br>
➡️ Talk to our knowledgeable resort cottage specialists to answer any and all questions regarding cottage ownership<br>
➡️ Take a sneak peek at our 2023 resort cottages and tour several models <br>
➡️ Learn about our latest phases of development at Bellmere Winds Golf Resort in The Kawarthas &amp; Bonnie Lake Resort in Muskoka<br>
➡️ Learn about our new FOUR SEASON resort community - Villages Port Elgin in Saugeen Shores<br>
➡️ Take advantage of our early bird show promotions and save thousands with our inventory clear-out specials <br>
<br>
Visit the link in our bio to learn more about our amazing early bird show promotions!<br>
<br>
#GreatBlueResorts #CottageOwnership #CottageOwner #CottageSale #CottageSales #TorontoRVShow #TorontoCampingShow #TheBigOne #TorontoRVandCampingShow #Mississauga #TorontoTradeShow #OntarioCottages #OntarioCottage #OntarioCottageCountry #CottageCountryOntario #OntarioLiving #OntarioRealEstate #CottageLife" data-video="" data-carousel="{&quot;data&quot;:[{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329614812_1015369679639615_6137080055528095176_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2a7krL4XMoUAX_KT7yq&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDKMD5pyE6vk14vrqEScD7zJ6wa22f5f_Kv95purZQzQA&amp;oe=641D4748&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/330859741_1272704046642184_934095368809817591_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=z_DTj1Sm_9sAX8d36cb&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfAh8OBDyY63HclpvBR84DVsK4hZX3DYUrBUXJgxK_FIUg&amp;oe=641D4ADB&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329181848_1104414143799202_7219083895662500048_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=W58KA6ORvAYAX8aGfUc&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDnRzw6etrNcZtynAbwyrh3H-se4O3o_VCHnV-zjhUbjA&amp;oe=641D5FCD&quot;}],&quot;vid_first&quot;:false}" data-id="sbi_18003426115559109" data-user="greatblueresorts" data-url="https://www.instagram.com/p/ConJrvVsSeV/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>
                        <svg class="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                        </svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/ConJrvVsSeV/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329614812_1015369679639615_6137080055528095176_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329614812_1015369679639615_6137080055528095176_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2a7krL4XMoUAX_KT7yq&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDKMD5pyE6vk14vrqEScD7zJ6wa22f5f_Kv95purZQzQA&amp;oe=641D4748&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329614812_1015369679639615_6137080055528095176_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2a7krL4XMoUAX_KT7yq&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDKMD5pyE6vk14vrqEScD7zJ6wa22f5f_Kv95purZQzQA&amp;oe=641D4748&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329614812_1015369679639615_6137080055528095176_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2a7krL4XMoUAX_KT7yq&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDKMD5pyE6vk14vrqEScD7zJ6wa22f5f_Kv95purZQzQA&amp;oe=641D4748&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329614812_1015369679639615_6137080055528095176_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=2a7krL4XMoUAX_KT7yq&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDKMD5pyE6vk14vrqEScD7zJ6wa22f5f_Kv95purZQzQA&amp;oe=641D4748&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329614812_1015369679639615_6137080055528095176_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329614812_1015369679639615_6137080055528095176_nlow.jpg" alt="BIGGER &amp; BETTER THAN EVER! 🏡

We're excited to announce that we will be exhibiting at the Toronto Spring Camping &amp; RV Show March 2nd - 5th!

Visit us at Booth #510 and be THE FIRST to:

➡️ Talk to our knowledgeable resort cottage specialists to answer any and all questions regarding cottage ownership
➡️ Take a sneak peek at our 2023 resort cottages and tour several models 
➡️ Learn about our latest phases of development at Bellmere Winds Golf Resort in The Kawarthas &amp; Bonnie Lake Resort in Muskoka
➡️ Learn about our new FOUR SEASON resort community - Villages Port Elgin in Saugeen Shores
➡️ Take advantage of our early bird show promotions and save thousands with our inventory clear-out specials 

Visit the link in our bio to learn more about our amazing early bird show promotions!

#GreatBlueResorts #CottageOwnership #CottageOwner #CottageSale #CottageSales #TorontoRVShow #TorontoCampingShow #TheBigOne #TorontoRVandCampingShow #Mississauga #TorontoTradeShow #OntarioCottages #OntarioCottage #OntarioCottageCountry #CottageCountryOntario #OntarioLiving #OntarioRealEstate #CottageLife" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_image" id="sbi_17996848582648325" data-date="1676041224" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/329590478_1665854553846066_5988333253905694896_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=KN9Tl0xYcZMAX9Uqjru&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCjsR3q6nHPHUhNAQIlzi8IJk08dOF7qgVfJ5RRloq2Nw&amp;oe=641C1986" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Known for its charming towns, beautiful lakes, and cottage living, Muskoka has long been a preferred getaway destination for Canadians.<br>
<br>
The most popular time to visit Muskoka is from June to September, however, It’s also worth visiting in October to see the fall colors, or in the winter to cross-country ski, snowshoe, snowmobile, and ice climb. <br>
<br>
No matter what time of year you visit, here are the best ways to enjoy your time in cottage country 👇<br>
<br>
➡️ Camp, hike, and canoe in the great outdoors<br>
➡️ Visit the quaint towns and villages<br>
➡️ Experience the resort cottage life at Great Blue Resorts!<br>
<br>
Visit the link in our bio to book your stay in the Hampton's of the North today!<br>
<br>
#GreatBlueResorts #OntarioTravel #TravelOntario #YoursToDiscover #ExploreOntario #OntarioAdventures #OntarioAdvneture #OntarioGems #OntarioToDo #VisitOntario #OntarioCottage #CottageCountryOntario #OntarioCottageCountry #Muskoka #TheKawarthas #PerthOntario #PrinceEdwardCounty" data-video="" data-carousel="" data-id="sbi_17996848582648325" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CofHLSRNqLH/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CofHLSRNqLH/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329590478_1665854553846066_5988333253905694896_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329590478_1665854553846066_5988333253905694896_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=KN9Tl0xYcZMAX9Uqjru&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCjsR3q6nHPHUhNAQIlzi8IJk08dOF7qgVfJ5RRloq2Nw&amp;oe=641C1986&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329590478_1665854553846066_5988333253905694896_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=KN9Tl0xYcZMAX9Uqjru&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCjsR3q6nHPHUhNAQIlzi8IJk08dOF7qgVfJ5RRloq2Nw&amp;oe=641C1986&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329590478_1665854553846066_5988333253905694896_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=KN9Tl0xYcZMAX9Uqjru&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCjsR3q6nHPHUhNAQIlzi8IJk08dOF7qgVfJ5RRloq2Nw&amp;oe=641C1986&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329590478_1665854553846066_5988333253905694896_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=KN9Tl0xYcZMAX9Uqjru&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCjsR3q6nHPHUhNAQIlzi8IJk08dOF7qgVfJ5RRloq2Nw&amp;oe=641C1986&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329590478_1665854553846066_5988333253905694896_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329590478_1665854553846066_5988333253905694896_nlow.jpg" alt="Known for its charming towns, beautiful lakes, and cottage living, Muskoka has long been a preferred getaway destination for Canadians.

The most popular time to visit Muskoka is from June to September, however, It’s also worth visiting in October to see the fall colors, or in the winter to cross-country ski, snowshoe, snowmobile, and ice climb. 

No matter what time of year you visit, here are the best ways to enjoy your time in cottage country 👇

➡️ Camp, hike, and canoe in the great outdoors
➡️ Visit the quaint towns and villages
➡️ Experience the resort cottage life at Great Blue Resorts!

Visit the link in our bio to book your stay in the Hampton's of the North today!

#GreatBlueResorts #OntarioTravel #TravelOntario #YoursToDiscover #ExploreOntario #OntarioAdventures #OntarioAdvneture #OntarioGems #OntarioToDo #VisitOntario #OntarioCottage #CottageCountryOntario #OntarioCottageCountry #Muskoka #TheKawarthas #PerthOntario #PrinceEdwardCounty" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_carousel" id="sbi_17861401457875372" data-date="1675980008" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/329354245_756879589135508_1265683629305247052_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=YWdfmJ8L1pIAX8yXc_8&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBrV7yjStO-DMn3fuW769E8YZLcSzhacwuni4UWU4H8bw&amp;oe=641CBD74" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Looking for a resort cottage to fit your family, your budget, and your lifestyle? 🏡<br>
<br>
Look no further. The Waverly features 3 bedrooms, 1 bathroom, and an open-concept living area. <br>
<br>
It comes fully furnished and move-in ready with all furniture, a tasteful décor package, and upgraded kitchen appliances; sure to check off all the boxes on your wish list!<br>
<br>
Best of all, save now with a $10,000 resort credit*!<br>
<br>
Book a discovery tour for this model by visiting the link in our bio.<br>
<br>
#GreatBlueResorts #CottageCountry #OntarioCottageCountry #OntarioCottages #OntarioCottage #CottageCountryOntario #CottageLiving #DiscoverOntario #TravelOntario #OntarioTravel #ExploreOntario #LakeLife #CottageLiving #CottageSale #CottageSales #CottageOwnership #OntarioCottages #OntarioCottage" data-video="" data-carousel="{&quot;data&quot;:[{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329354245_756879589135508_1265683629305247052_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=YWdfmJ8L1pIAX8yXc_8&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBrV7yjStO-DMn3fuW769E8YZLcSzhacwuni4UWU4H8bw&amp;oe=641CBD74&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329354738_895102925142691_2469116452474705625_n.jpg?_nc_cat=100&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=P65-AjdEsxsAX8Xeyld&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCCGMETHhlT955fqasHWEHhqKUuP0iShdNyQqU6UdjSiw&amp;oe=641DFC19&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329780885_1613544672428720_6212194632601393315_n.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=0xDTFGWb91oAX_rztn6&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDQRywMnrSt6ILYsSLv56_xAC88E_072haV3c_YHX8EnA&amp;oe=641D6486&quot;}],&quot;vid_first&quot;:false}" data-id="sbi_17861401457875372" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CodSaoao1NK/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>
                        <svg class="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                        </svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CodSaoao1NK/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329354245_756879589135508_1265683629305247052_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329354245_756879589135508_1265683629305247052_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=YWdfmJ8L1pIAX8yXc_8&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBrV7yjStO-DMn3fuW769E8YZLcSzhacwuni4UWU4H8bw&amp;oe=641CBD74&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329354245_756879589135508_1265683629305247052_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=YWdfmJ8L1pIAX8yXc_8&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBrV7yjStO-DMn3fuW769E8YZLcSzhacwuni4UWU4H8bw&amp;oe=641CBD74&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329354245_756879589135508_1265683629305247052_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=YWdfmJ8L1pIAX8yXc_8&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBrV7yjStO-DMn3fuW769E8YZLcSzhacwuni4UWU4H8bw&amp;oe=641CBD74&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329354245_756879589135508_1265683629305247052_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=YWdfmJ8L1pIAX8yXc_8&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBrV7yjStO-DMn3fuW769E8YZLcSzhacwuni4UWU4H8bw&amp;oe=641CBD74&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329354245_756879589135508_1265683629305247052_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329354245_756879589135508_1265683629305247052_nlow.jpg" alt="Looking for a resort cottage to fit your family, your budget, and your lifestyle? 🏡

Look no further. The Waverly features 3 bedrooms, 1 bathroom, and an open-concept living area. 

It comes fully furnished and move-in ready with all furniture, a tasteful décor package, and upgraded kitchen appliances; sure to check off all the boxes on your wish list!

Best of all, save now with a $10,000 resort credit*!

Book a discovery tour for this model by visiting the link in our bio.

#GreatBlueResorts #CottageCountry #OntarioCottageCountry #OntarioCottages #OntarioCottage #CottageCountryOntario #CottageLiving #DiscoverOntario #TravelOntario #OntarioTravel #ExploreOntario #LakeLife #CottageLiving #CottageSale #CottageSales #CottageOwnership #OntarioCottages #OntarioCottage" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_video" id="sbi_17987014930729020" data-date="1675805480" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/329287679_137331232541035_6692836037684651164_n.jpg?_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=0ndDpHdqDDUAX9dUHaY&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCcVhqJTFNj0PTivGuNh2lA_CbEj5tbx5HKy52Nn1cgdw&amp;oe=641D711A" rel="nofollow noopener" data-lightbox-sbi="1" data-title="This could be your office view! ☀️<br>
<br>
Do you or someone you know love living and promoting the cottage lifestyle? Do you want to help families create traditions that will last a lifetime? Join the Great Blue Resorts Team!<br>
<br>
Visit the link in our bio today to learn more about available career opportunities with Great Blue Resorts!<br>
<br>
#GreatBlueResorts #ApplyToday #JoinOurTeam #OntarioSales #CottageSales #JobsOntario #Hiring #WereHiring #WorkWithUs #OntarioCottages #RealEstate #CottageCountryOntario #OntarioCottageSales #SalesRep #SalesRepresentatives #OntarioSalesHiring" data-video="https://video-yyz1-1.cdninstagram.com/v/t50.2886-16/327766892_1282775468936988_5857821065898399302_n.mp4?_nc_cat=110&amp;vs=509964701275631_3691405175&amp;_nc_vs=HBksFQAYJEdHeFRpUk1jRHlkd3JZNEVBRWFXckM0NUtVdFJia1lMQUFBRhUAAsgBABUAGCRHTnJ0b1JPSHh5czFZQUlDQVBMZThnT2k4a1JRYmtZTEFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaIiIGroa30PxUCKAJDMywXQAA1P3ztkWgYEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&amp;ccb=1-7&amp;_nc_sid=59939d&amp;efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkIn0%3D&amp;_nc_ohc=guyqqwSgpCMAX8d02om&amp;_nc_ht=video-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfC2_dYYTz_Gff5JZxQg26jlW2-ZWEDh9q3eLm4CypI2Lw&amp;oe=6418ADE1&amp;_nc_rid=9f84f72a92" data-carousel="" data-id="sbi_17987014930729020" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CoYFhFwr13K/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                        <svg style="color: rgba(255,255,255,1)" class="svg-inline--fa fa-play fa-w-14 sbi_playbtn" aria-label="Play" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> </a>
                        <svg style="color: rgba(255,255,255,1)" class="svg-inline--fa fa-play fa-w-14 sbi_playbtn" aria-label="Play" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CoYFhFwr13K/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329287679_137331232541035_6692836037684651164_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.2885-15\/329287679_137331232541035_6692836037684651164_n.jpg?_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=0ndDpHdqDDUAX9dUHaY&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCcVhqJTFNj0PTivGuNh2lA_CbEj5tbx5HKy52Nn1cgdw&amp;oe=641D711A&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.2885-15\/329287679_137331232541035_6692836037684651164_n.jpg?_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=0ndDpHdqDDUAX9dUHaY&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCcVhqJTFNj0PTivGuNh2lA_CbEj5tbx5HKy52Nn1cgdw&amp;oe=641D711A&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.2885-15\/329287679_137331232541035_6692836037684651164_n.jpg?_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=0ndDpHdqDDUAX9dUHaY&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCcVhqJTFNj0PTivGuNh2lA_CbEj5tbx5HKy52Nn1cgdw&amp;oe=641D711A&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t51.2885-15\/329287679_137331232541035_6692836037684651164_n.jpg?_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=0ndDpHdqDDUAX9dUHaY&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCcVhqJTFNj0PTivGuNh2lA_CbEj5tbx5HKy52Nn1cgdw&amp;oe=641D711A&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329287679_137331232541035_6692836037684651164_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329287679_137331232541035_6692836037684651164_nlow.jpg" alt="This could be your office view! ☀️

Do you or someone you know love living and promoting the cottage lifestyle? Do you want to help families create traditions that will last a lifetime? Join the Great Blue Resorts Team!

Visit the link in our bio today to learn more about available career opportunities with Great Blue Resorts!

#GreatBlueResorts #ApplyToday #JoinOurTeam #OntarioSales #CottageSales #JobsOntario #Hiring #WereHiring #WorkWithUs #OntarioCottages #RealEstate #CottageCountryOntario #OntarioCottageSales #SalesRep #SalesRepresentatives #OntarioSalesHiring" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_image" id="sbi_17958118589187570" data-date="1675790724" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/329230619_618670896689665_276708325314406292_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Eg7j45sNuG8AX_QySto&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBGkwvOEoczeTGgor4VsSuCOLpRSSu9iaBSuql9BcmPDA&amp;oe=641C4B5D" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Explore and experience Muskoka at Lantern Bay Resort with a pontoon boat tour on your next getaway! 🚤<br>
<br>
Start planning your vacation today with preferred dates and accommodation by visiting the link in our bio. <br>
<br>
📸 @_samstreeter<br>
<br>
#GreatBlueResorts #OntarioCottageRental #OntarioCottageRentals #CottageRental #CottageRentals #CottageCountry #CottageCountryOntario #CottageWeekend #CottageVacation #OntarioTravel #OntarioTourism #Spring2023 #VacationPlanning #ExploreOntario #DiscoverOntario #OntarioAdventure #OntarioLiving #OntarioAdventures" data-video="" data-carousel="" data-id="sbi_17958118589187570" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CoXpYkNufQf/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CoXpYkNufQf/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329230619_618670896689665_276708325314406292_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329230619_618670896689665_276708325314406292_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Eg7j45sNuG8AX_QySto&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBGkwvOEoczeTGgor4VsSuCOLpRSSu9iaBSuql9BcmPDA&amp;oe=641C4B5D&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329230619_618670896689665_276708325314406292_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Eg7j45sNuG8AX_QySto&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBGkwvOEoczeTGgor4VsSuCOLpRSSu9iaBSuql9BcmPDA&amp;oe=641C4B5D&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329230619_618670896689665_276708325314406292_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Eg7j45sNuG8AX_QySto&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBGkwvOEoczeTGgor4VsSuCOLpRSSu9iaBSuql9BcmPDA&amp;oe=641C4B5D&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/329230619_618670896689665_276708325314406292_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=Eg7j45sNuG8AX_QySto&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfBGkwvOEoczeTGgor4VsSuCOLpRSSu9iaBSuql9BcmPDA&amp;oe=641C4B5D&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329230619_618670896689665_276708325314406292_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/329230619_618670896689665_276708325314406292_nlow.jpg" alt="Explore and experience Muskoka at Lantern Bay Resort with a pontoon boat tour on your next getaway! 🚤

Start planning your vacation today with preferred dates and accommodation by visiting the link in our bio. 

📸 @_samstreeter

#GreatBlueResorts #OntarioCottageRental #OntarioCottageRentals #CottageRental #CottageRentals #CottageCountry #CottageCountryOntario #CottageWeekend #CottageVacation #OntarioTravel #OntarioTourism #Spring2023 #VacationPlanning #ExploreOntario #DiscoverOntario #OntarioAdventure #OntarioLiving #OntarioAdventures" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_image" id="sbi_17968722650131123" data-date="1675436409" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/328124787_583088983671052_3944656461083464644_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=-ncMta_YT2EAX-vsO7M&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDR8bYEL8Mny23DQ8yQ3je6iC2Zz5-Qsnww0nvfGmhkiw&amp;oe=641D056E" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Only 87 days left until the 2023 season begins at Great Blue Resorts!<br>
<br>
What are you looking forward to the most? Let us know in the comments👇<br>
<br>
#GreatBlueResorts #CottageCountry #CottageLiving #OntarioCottageCountry #OntarioCottage #OntarioCottages #OntarioAdventure #OntarioAdventures #OntarioTravel #OntarioSummer #ResortCottage #CottageLife #CottageCountryOntario" data-video="" data-carousel="" data-id="sbi_17968722650131123" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CoNFlTMLYax/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CoNFlTMLYax/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/328124787_583088983671052_3944656461083464644_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/328124787_583088983671052_3944656461083464644_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=-ncMta_YT2EAX-vsO7M&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDR8bYEL8Mny23DQ8yQ3je6iC2Zz5-Qsnww0nvfGmhkiw&amp;oe=641D056E&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/328124787_583088983671052_3944656461083464644_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=-ncMta_YT2EAX-vsO7M&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDR8bYEL8Mny23DQ8yQ3je6iC2Zz5-Qsnww0nvfGmhkiw&amp;oe=641D056E&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/328124787_583088983671052_3944656461083464644_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=-ncMta_YT2EAX-vsO7M&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDR8bYEL8Mny23DQ8yQ3je6iC2Zz5-Qsnww0nvfGmhkiw&amp;oe=641D056E&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/328124787_583088983671052_3944656461083464644_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=-ncMta_YT2EAX-vsO7M&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDR8bYEL8Mny23DQ8yQ3je6iC2Zz5-Qsnww0nvfGmhkiw&amp;oe=641D056E&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/328124787_583088983671052_3944656461083464644_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/328124787_583088983671052_3944656461083464644_nlow.jpg" alt="Only 87 days left until the 2023 season begins at Great Blue Resorts!

What are you looking forward to the most? Let us know in the comments👇

#GreatBlueResorts #CottageCountry #CottageLiving #OntarioCottageCountry #OntarioCottage #OntarioCottages #OntarioAdventure #OntarioAdventures #OntarioTravel #OntarioSummer #ResortCottage #CottageLife #CottageCountryOntario" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sbi_item sbi_type_carousel" id="sbi_18058772029373001" data-date="1675285208" data-numcomments="0">
                    <div class="sbi_inner_wrap">
                      <div class="sbi_photo_wrap" style="border-radius: inherit;"><a class="sbi_link_area nofancybox" href="https://scontent-yyz1-1.cdninstagram.com/v/t39.30808-6/323012503_2320504264789185_3347971459123335508_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=-Z_LG-okHAAAX8yv_14&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDmhICXMMtB2DSVrQSa6GqWsegrHchaUBFRxw81_hi6aA&amp;oe=641D289D" rel="nofollow noopener" data-lightbox-sbi="1" data-title="Welcome to 626 Sunset Bay Road at Golden Beach Resort! ☀️<br>
<br>
This 2021 Northlander Waterton resort cottage model is nearly brand new, comes fully furnished and is move-in ready.<br>
<br>
Offering a beautiful wrap-around deck to extend your living space outdoors, this model is perfect for that morning cup of coffee while you take in the sunrise.<br>
<br>
Visit the link in our bio to learn more about this unit today!<br>
<br>
#GreatBlueResorts #CottageSale #CottageSales #CottagesForSale #CottageRealEstate #OntarioCottage #OntarioCottages #CottageCountryOntario #OntarioCottageCountry #CottageOwner #CottageLiving #OntarioRealEstate #FallCottage #Muskoka #Kawarthas #PerthOntario #PrinceEdwardCounty" data-video="" data-carousel="{&quot;data&quot;:[{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/323012503_2320504264789185_3347971459123335508_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=-Z_LG-okHAAAX8yv_14&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDmhICXMMtB2DSVrQSa6GqWsegrHchaUBFRxw81_hi6aA&amp;oe=641D289D&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/328119479_676645940811576_7421693219969486026_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=hv_QQV1hbEYAX-rakUR&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfCGXkZKYOhwhaWuO4xJFyEOuLiW04nw45wWZ8cs6nFSqg&amp;oe=641D6CF4&quot;},{&quot;type&quot;:&quot;image&quot;,&quot;media&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/328243500_1818647855188955_8571953326526660490_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=lMEK46FJEocAX_c9ai2&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDTaFUnxAaFC5KCARSG8JheOw2PB9SfqiFWvCOIqcYnmw&amp;oe=641D7152&quot;}],&quot;vid_first&quot;:false}" data-id="sbi_18058772029373001" data-user="greatblueresorts" data-url="https://www.instagram.com/p/CoIlMOxvIL3/" data-avatar="" data-account-type="business">
                        <span class="sbi-screenreader">Open</span>
                      </a>
                        <svg class="svg-inline--fa fa-clone fa-w-16 sbi_lightbox_carousel_icon" aria-hidden="true" aria-label="Clone" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                        </svg>

                        <a class="sbi_photo sbi_imgLiquid_bgSize sbi_imgLiquid_ready" href="https://www.instagram.com/p/CoIlMOxvIL3/" target="_blank" rel="nofollow noopener" data-full-res="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/323012503_2320504264789185_3347971459123335508_nfull.jpg" data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/323012503_2320504264789185_3347971459123335508_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=-Z_LG-okHAAAX8yv_14&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDmhICXMMtB2DSVrQSa6GqWsegrHchaUBFRxw81_hi6aA&amp;oe=641D289D&quot;,&quot;150&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/323012503_2320504264789185_3347971459123335508_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=-Z_LG-okHAAAX8yv_14&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDmhICXMMtB2DSVrQSa6GqWsegrHchaUBFRxw81_hi6aA&amp;oe=641D289D&quot;,&quot;320&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/323012503_2320504264789185_3347971459123335508_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=-Z_LG-okHAAAX8yv_14&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDmhICXMMtB2DSVrQSa6GqWsegrHchaUBFRxw81_hi6aA&amp;oe=641D289D&quot;,&quot;640&quot;:&quot;https:\/\/scontent-yyz1-1.cdninstagram.com\/v\/t39.30808-6\/323012503_2320504264789185_3347971459123335508_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=-Z_LG-okHAAAX8yv_14&amp;_nc_ht=scontent-yyz1-1.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AfDmhICXMMtB2DSVrQSa6GqWsegrHchaUBFRxw81_hi6aA&amp;oe=641D289D&quot;}" style="height: 225px; background-image: url(&quot;https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/323012503_2320504264789185_3347971459123335508_nlow.jpg&quot;); background-size: cover; background-position: center center; background-repeat: no-repeat; padding-bottom: 0px;">
                          <img src="https://www.greatblueresorts.com/wp-content/uploads/sb-instagram-feed-images/323012503_2320504264789185_3347971459123335508_nlow.jpg" alt="Welcome to 626 Sunset Bay Road at Golden Beach Resort! ☀️

This 2021 Northlander Waterton resort cottage model is nearly brand new, comes fully furnished and is move-in ready.

Offering a beautiful wrap-around deck to extend your living space outdoors, this model is perfect for that morning cup of coffee while you take in the sunrise.

Visit the link in our bio to learn more about this unit today!

#GreatBlueResorts #CottageSale #CottageSales #CottagesForSale #CottageRealEstate #OntarioCottage #OntarioCottages #CottageCountryOntario #OntarioCottageCountry #CottageOwner #CottageLiving #OntarioRealEstate #FallCottage #Muskoka #Kawarthas #PerthOntario #PrinceEdwardCounty" style="display: none;">
                        </a>
                      </div>
                      <div class="sbi_info_wrapper">
                        <div class="sbi_info">
                        </div>
                      </div>
                    </div>
                  </div> </div>
                <div id="sbi_load">
                  <a class="sbi_load_btn" href="javascript:void(0);">
                    <span class="sbi_btn_text">Load More...</span>
                    <span class="sbi_loader sbi_hidden" style="background-color: rgb(255, 255, 255);" aria-hidden="true"></span>
                  </a>
                  <span class="sbi_follow_btn">
                    <a href="https://www.instagram.com/greatblueresorts/" target="_blank" rel="nofollow noopener">
                      <svg class="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" data-fa-processed="" aria-label="Instagram" data-prefix="fab" data-icon="instagram" role="img" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                      </svg> <span>Follow on Instagram</span>
                    </a>
                  </span>
                </div>  */}
                {/* </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}



      {/* <div className='fintPrintBar'>
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
      </div> */}

    </section >

  )
}

export default Home
