const asyncHandler = require("express-async-handler");
const TopSliderImages = require('../models/Topsliderimages');
const Privacy_Policy = require('../models/privacy_policy');
const Countries = require('../models/country');
const Banner = require("../models/banner");
const About = require('../models/about');
const BottomSliderImages = require("../models/BottomSliderImages") 
const SocialAccounts = require("../models/socialAccounts");
const Currency = require("../models/currency");
const AdvertsmentCard = require("../models/advertisementCard");
const Marketer = require("../models/marketer");
const Category = require("../models/category")
const AnnouncementEmails = require("../models/announcementEmail");


const getAllTopSliderImages = asyncHandler(async (req, res, next) => {
    let topSliderImages;
    try {
        topSliderImages = await TopSliderImages.findAll();
    } catch (err) {
        res.status(500);
        throw new Error(err)
    }

    res.json(topSliderImages);
});

const postTopSliderImages = asyncHandler(async (req, res, next) => {
  const {refer_to_category_url, image_ar_url,  image_tr_url, image_en_url, image_fr_url, mobile_image_ar_url, mobile_image_en_url, mobile_image_tr_url, mobile_image_fr_url} = req.body;

  console.log(mobile_image_tr_url)

  let createdTopSliderImages;

  try {
    createdTopSliderImages = await TopSliderImages.create({
      refer_to_category_url,
       image_ar_url,
       image_tr_url,
      image_en_url,
      image_fr_url, 
      mobile_image_ar_url,
      mobile_image_en_url, 
      mobile_image_tr_url, 
      mobile_image_fr_url
    });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }

  res.json(createdTopSliderImages);
});


const updateTopSliderImages = asyncHandler(async (req, res) => {
  console.log("req.body", req.body);
     let updateTopSlyderImage;
     try{
     updateTopSlyderImage = await TopSliderImages.update({
        refer_to_category_url: req.body.refer_to_category_url,
        image_ar_url: req.body.image_ar_url,
        image_tr_url: req.body.image_tr_url ,
       image_en_url : req.body.image_en_url,
       image_fr_url: req.body.image_fr_url,  
       mobile_image_ar_url: req.body.mobile_image_ar_url,
       mobile_image_en_url: req.body.mobile_image_en_url, 
       mobile_image_tr_url: req.body.mobile_image_tr_url, 
       mobile_image_fr_url: req.body.mobile_image_fr_url
      }, {
         where: {
          id : req.params.id
         }
       });
       console.log("update TopSlyderImage",updateTopSlyderImage)
       return res.json({
    id : updateTopSlyderImage.id,
    refer_to_category_url: updateTopSlyderImage.refer_to_category_url,
    image_ar_url: updateTopSlyderImage.image_ar_url,
    image_tr_url: updateTopSlyderImage.image_tr_url ,
   image_en_url : updateTopSlyderImage.image_en_url,
   image_fr_url: updateTopSlyderImage.image_fr_url,  
   mobile_image_ar_url: updateTopSlyderImage.mobile_image_ar_url,
   mobile_image_en_url: updateTopSlyderImage.mobile_image_en_url, 
   mobile_image_tr_url: updateTopSlyderImage.mobile_image_tr_url, 
   mobile_image_fr_url: updateTopSlyderImage.mobile_image_fr_url
  });
  }catch(err){
    res.status(500);
    throw new Error('failed to update');
  }
});


const deleteTopSliderImages = asyncHandler(async(req,res,next)=> {
  try{
  let deleteRecord;
 deleteRecord = await TopSliderImages.destroy({
      where: {
          id: req.params.id
      }
  })
  }
  catch(error){
      res.status(500).json(error);
  }
  res.status(200).json({message:"Deleted successfully"}); 
});


const getBottomSliderImages = asyncHandler(async (req, res, next) => {
  let bottomSliderImages;
  try {
    bottomSliderImages = await BottomSliderImages.findAll();
  } catch (err) {
      res.status(500);
      throw new Error(err)
  }

  res.json(bottomSliderImages);
});

const postBottomSliderImages = asyncHandler(async (req, res, next) => {
const {image_ar_url,  image_tr_url, image_en_url, image_fr_url, mobile_image_ar_url, mobile_image_en_url, mobile_image_tr_url, mobile_image_fr_url} = req.body;

console.log(req.body)

let createdBottomSliderImages;

try {
  createdBottomSliderImages = await BottomSliderImages.create({
     image_ar_url,
     image_tr_url,
    image_en_url,
    image_fr_url, 
    mobile_image_ar_url,
    mobile_image_en_url, 
    mobile_image_tr_url, 
    mobile_image_fr_url
  });
} catch (err) {
  res.status(500);
  throw new Error(err);
}

res.json(createdBottomSliderImages);
});


const updateBottomSliderImages = asyncHandler(async (req, res) => {
console.log("req.body", req.body);
   let updateBottomSlyderImage;
   try{
   updateBottomSlyderImage = await BottomSliderImages.update({
      image_ar_url: req.body.image_ar_url,
      image_tr_url: req.body.image_tr_url ,
     image_en_url : req.body.image_en_url,
     image_fr_url: req.body.image_fr_url,  
     mobile_image_ar_url: req.body.mobile_image_ar_url,
     mobile_image_en_url: req.body.mobile_image_en_url, 
     mobile_image_tr_url: req.body.mobile_image_tr_url, 
     mobile_image_fr_url: req.body.mobile_image_fr_url
    }, {
       where: {
        id : req.params.id
       }
     });
     console.log("update BottomSlyderImage", updateBottomSlyderImage)
     return res.json({
  id : updateBottomSlyderImage.id,
  image_ar_url: updateBottomSlyderImage.image_ar_url,
  image_tr_url: updateBottomSlyderImage.image_tr_url ,
 image_en_url : updateBottomSlyderImage.image_en_url,
 image_fr_url: updateBottomSlyderImage.image_fr_url,  
 mobile_image_ar_url: updateBottomSlyderImage.mobile_image_ar_url,
 mobile_image_en_url: updateBottomSlyderImage.mobile_image_en_url, 
 mobile_image_tr_url: updateBottomSlyderImage.mobile_image_tr_url, 
 mobile_image_fr_url: updateBottomSlyderImage.mobile_image_fr_url
});
}catch(err){
  res.status(500);
  throw new Error('failed to update');
}
});


const deleteBottomSliderImages = asyncHandler(async(req,res,next)=> {
try{
let deleteRecord;
deleteRecord = await BottomSliderImages.destroy({
    where: {
        id: req.params.id
    }
})
}
catch(error){
    res.status(500).json(error);
}
res.status(200).json({message:"Deleted successfully"}); 
});


const getAllCountries = asyncHandler(async (req, res, next) => {
    let countries;
    try {
        countries = await Countries.findAll();
    } catch (err) {
        res.status(500);
        throw new Error(err)
    }

    res.json(countries);
});

const postCountries = asyncHandler(async (req, res, next) => {
  const {country_name_AR, country_name_EN,  country_name_FR, country_name_TR, shipping_price} = req.body;

  console.log(req.body)

  let createdCountry;

  try {
    createdCountry = await Countries.create({
      country_name_AR,
       country_name_EN,  
       country_name_FR, 
       country_name_TR, 
       shipping_price
    });
  } catch (err) {
    res.status(500);
    throw new Error(err);
  }

  res.json(createdCountry);
});


const updateCountries = asyncHandler(async (req, res) => {
  console.log("req.body", req.body);
     let updateCountry;
     try{
      updateCountry = await Countries.update({
        country_name_AR: req.body.country_name_AR,
        country_name_EN: req.body.country_name_EN,
        country_name_FR: req.body.country_name_FR ,
        country_name_TR : req.body.country_name_TR,
        shipping_price: req.body.shipping_price,  
       
      }, {
         where: {
          id : req.params.id
         }
       });
       console.log("update country",updateCountry)
       return res.json({
    id : updateCountry.id,
    country_name_AR: updateCountry.country_name_AR,
        country_name_EN: updateCountry.country_name_EN,
        country_name_FR: updateCountry.country_name_FR ,
        country_name_TR : updateCountry.country_name_TR,
  });
  }catch(err){
    res.status(500);
    throw new Error('failed to update');
  }
});


const deleteCountries = asyncHandler(async(req,res,next)=> {
  try{
  let deleteRecord;
 deleteRecord = await Countries.destroy({
      where: {
          id: req.params.id
      }
  })
  }
  catch(error){
      res.status(500).json(error);
  }
  res.status(200).json({message:"Deleted successfully"}); 
});



const getBanner = asyncHandler(async(req,res,next) =>{
    let banner;
    try{
      banner = await Banner.findAll();
    }catch(err){
     res.status(500);
     throw new Error(err);
    }
    res.json(banner);
});

  const postBanner = asyncHandler(async (req, res, next) => {
    const {banner_text_AR,banner_text_EN, banner_text_FR,banner_text_TR} = req.body;
    console.log(req.body)
    let createdBanner;
  let existedBanner;
      existedBanner = await Banner.count();
      if(existedBanner === 0){
    try {
        createdBanner = await Banner.create({
          banner_text_AR,banner_text_EN, banner_text_FR,banner_text_TR
      });
    } catch (err) {
      res.status(500);
      throw new Error(err);
    }
  }
  else{
    res.status(200).json({message:"not allow to create more than one"}); 
  }
    res.json(createdBanner);
  });

  const updateBanner = asyncHandler(async (req, res) => {
    console.log("req.body", req.body);
       let updateBanner;
       try{
       updateBanner = await Banner.update({ 
        banner_text_AR: req.body.banner_text_AR,
        banner_text_EN: req.body.banner_text_EN, 
        banner_text_FR: req.body.banner_text_FR,
        banner_text_TR: req.body.banner_text_TR 
        }, {
           where: {
            id : req.params.id
           }
         });
         console.log("update banner",updateBanner)
         return res.json({
      id : updateBanner.id,
      banner_text_AR: updateBanner.banner_text_AR,
      banner_text_EN: updateBanner.banner_text_EN, 
      banner_text_FR: updateBanner.banner_text_FR,
      banner_text_TR: updateBanner.banner_text_TR 
    });
    }catch(err){
      res.status(500);
      throw new Error('failed to update');
    }
  });


const deleteBanner = asyncHandler(async(req,res,next)=> {
  let deleteRecord; 
   try{  
   deleteRecord = await Banner.destroy({
        where: {
            id: req.params.id
        }
    })
    }
    catch(error){
        res.status(500).json(error);
    }
    res.status(200).json({message:"Deleted successfully"}); 
});

const getPrivacyPolicy = asyncHandler(async (req, res, next) => {
  let privacyPolicy;
  try {
      privacyPolicy = await Privacy_Policy.findAll();
  } catch (err) {
      res.status(500);
      throw new Error(err)
  }

  res.json(privacyPolicy);
});

const postPrivacyPolicy = asyncHandler(async (req, res, next) => {
  let createdPolicy;
    const {header_ar,content_ar, header_fr,content_fr, header_tr,content_tr, header_en,content_en} = req.body;
    console.log(req.body)
    let existedPolicy;
    existedPolicy = await Privacy_Policy.count();
    console.log(existedPolicy )
    if( existedPolicy === 0){
    try {  
        createdPolicy = await Privacy_Policy.create({
          header_ar,content_ar, header_fr,content_fr, header_tr,content_tr, header_en,content_en
      });
    } catch (err) {
      res.status(500);
      throw new Error(err);
    }
  }//if
  else{
    res.status(200).json({message:"not allow to create more than one"}); 
  }
    
  
    res.json(createdPolicy);
  });
  


  const updatePrivacyPolicy = asyncHandler(async (req, res) => {
    console.log("req.body", req.body);
       let updatePolicy;
       try{
       updatePolicy = await Privacy_Policy.update({
        header_ar:  req.body.header_ar ,
        content_ar:  req.body.content_ar,
        header_fr: req.body. header_fr,
        content_fr:  req.body.content_fr,
        header_tr:  req.body.header_tr ,
        content_tr:  req.body.content_tr,
        header_en:  req.body.header_en ,
        content_en:  req.body.content_en
        }, {
           where: {
            id : req.params.id
           }
         });
         console.log("update policy",updatePolicy)
         return res.json({
      id : updatePolicy.id,
      header_ar:  updatePolicy.header_ar ,
      content_ar:  updatePolicy.content_ar,
      header_fr: updatePolicy. header_fr,
      content_fr:  updatePolicy.content_fr,
      header_tr:  updatePolicy.header_tr ,
      content_tr:  updatePolicy.content_tr,
      header_en:  updatePolicy.header_en ,
      content_en:  updatePolicy.content_en
    });
    }catch(err){
      res.status(500);
      throw new Error('failed to update');
    }
  });


const deletePrivacyPolicy = asyncHandler(async(req,res,next)=> {
   let deleteRecord; 
     try{
  
   deleteRecord = await Privacy_Policy.destroy({
        where: {
            id: req.params.id
        }
    })
    }
    catch(error){
        res.status(500).json(error);
    }
    res.status(200).json({message:"Deleted successfully"}); 
});


const getAbout = asyncHandler(async (req, res, next) => {
    let about;
    try {
        about = await About.findAll();
    } catch (err) {
        res.status(500);
        throw new Error(err)
    }

    res.json(about);
});

const deleteAbout = asyncHandler(async(req,res,next)=> {
    try{
    let deleteRecord;
   deleteRecord = About.destroy({
        where: {
            id: req.params.id
        }
    })
    }
    catch(error){
        res.status(500).json(error);
    }
    res.status(200).json({message:"Deleted successfully"}); 
});

const updateAboutCompany = asyncHandler(async (req, res) => {
    console.log("req.body", req.body);
       let updateAbout;
       try{
       updateAbout = await About.update({
        header_ar:  req.body.header_ar ,
        content_ar:  req.body.content_ar,
        header_fr: req.body. header_fr,
        content_fr:  req.body.content_fr,
        header_tr:  req.body.header_tr ,
        content_tr:  req.body.content_tr,
        header_en:  req.body.header_en ,
        content_en:  req.body.content_en
        }, {
           where: {
            id : req.params.id
           }
         });
         console.log("update About",updateAbout)
         return res.json({
      id : updateAbout.id,
      header_ar:  updateAbout.header_ar ,
      content_ar:  updateAbout.content_ar,
      header_fr: updateAbout. header_fr,
      content_fr:  updateAbout.content_fr,
      header_tr:  updateAbout.header_tr ,
      content_tr:  updateAbout.content_tr,
      header_en:  updateAbout.header_en ,
      content_en:  updateAbout.content_en
    });
    }catch(err){
      res.status(500);
      throw new Error('failed to update');
    }
  });

  const postAbout = asyncHandler(async (req, res, next) => {
    const {header_ar,content_ar, header_fr,content_fr, header_tr,content_tr, header_en,content_en} = req.body;
      console.log(req.body)
      let existedAbout; 
      let createdAbout;
      existedAbout = await About.count();
      console.log(existedAbout)
     if(existedAbout === 0){
        try {
          createdAbout = await About.create({
            header_ar,content_ar, header_fr,content_fr, header_tr,content_tr, header_en,content_en
        });
      } catch (err) {
        res.status(500);
        throw new Error(err);
      }
     }//if
     else{
      res.status(200).json({message:"not allow to create more than one"}); 
     }
    res.json(createdAbout);
  });


  const postSocialAccounts = asyncHandler(async (req, res, next) => {
    const {phoneNum, instagram_URL, facebook_URL, twitter_URL, youtube_URL, pintrest_URL, tumblr_URL,
      telegram_URL} = req.body;
  
    let createdSocialAccount;
  let existedSocialAccounts;
  existedSocialAccounts = await SocialAccounts.count();
  if(existedSocialAccounts === 0){
    try {
      createdSocialAccount = await SocialAccounts.create({
        phoneNum,
        instagram_URL, 
        facebook_URL,
         twitter_URL, 
         youtube_URL, 
         pintrest_URL,
         tumblr_URL,
         telegram_URL
      });
    } catch (err) {
      res.status(500);
      throw new Error(err);
    }
  }
  else{
    res.status(200).json({message:"not allow to create more than one"}); 
  }
    res.json(createdSocialAccount);
  });
  
  
  const getSocialAccounts= asyncHandler(async (req, res, next) => {
    let socialAccount;
    try {
      socialAccount = await SocialAccounts.findAll();
    } catch{
      res.status(500);
      throw new Error('something went wrong');
    }
    res.json(socialAccount);
  });
  
  const updateSocialAccounts = asyncHandler(async (req, res) => {
    console.log("req.body", req.body);
       let updateSocialAccounts;
       try{
        updateSocialAccounts = await SocialAccounts.update({
          phoneNum: req.body.phoneNum,
        instagram_URL: req.body.instagram_URL, 
        facebook_URL: req.body.facebook_URL,
         twitter_URL: req.body.twitter_URL, 
         youtube_URL: req.body.youtube_URL, 
         pintrest_URL: req.body.pintrest_URL,
         tumblr_URL: req.body.tumblr_URL,
         telegram_URL: req.body.telegram_URL
          
        }, {
           where: {
            id : req.params.id
           }
         });
         console.log("update banner",updateSocialAccounts)
         return res.json({
      id : updateSocialAccounts.id,
       phoneNum: updateSocialAccounts.phoneNum,
        instagram_URL: updateSocialAccounts.instagram_URL, 
        facebook_URL: updateSocialAccounts.facebook_URL,
         twitter_URL: updateSocialAccounts.twitter_URL, 
         youtube_URL: updateSocialAccounts.youtube_URL, 
         pintrest_URL: updateSocialAccounts.pintrest_URL,
         tumblr_URL: updateSocialAccounts.tumblr_URL,
         telegram_URL: updateSocialAccounts.telegram_URL
     
    });
    }catch(err){
      res.status(500);
      throw new Error('failed to update');
    }
  });
  
  const deleteSocialAccounts = asyncHandler(async(req,res,next)=> {
    try{
    let deleteRecord;
   deleteRecord = await SocialAccounts.destroy({
        where: {
            id: req.params.id
        }
    })
    }
    catch(error){
        res.status(500).json(error);
    }
    res.status(200).json({message:"Deleted successfully"}); 
  });


  const postCurrencies = asyncHandler(async (req, res, next) => {
    const { currency_name_AR,
      currency_name_FR, 
      currency_name_TR,
      currency_name_EN, 
      currency_code, 
      exchange_rate} = req.body;
  
    let createdCurrency;
  
    try {
      createdCurrency = await Currency.create({
        currency_name_AR,
        currency_name_FR, 
        currency_name_TR,
        currency_name_EN, 
        currency_code, 
        exchange_rate
      });
    } catch (err) {
      res.status(500);
      throw new Error(err);
    }
    res.json(createdCurrency);
  });
  
  
  const getCurrencies= asyncHandler(async (req, res, next) => {
    let currency;
    try {
      currency = await Currency.findAll();
    } catch{
      res.status(500);
      throw new Error('something went wrong');
    }
    res.json(currency);
  });
  
  const updateCurrencies = asyncHandler(async (req, res) => {
    console.log("req.body", req.body);
       let updateCurrency;
       try{
        updateCurrency = await Currency.update({
          currency_name_AR: req.body.currency_name_AR,
          currency_name_FR: req.body.currency_name_FR, 
          currency_name_TR: req.body.currency_name_TR,
          currency_name_EN: req.body.currency_name_EN, 
          currency_code: req.body.currency_code, 
          exchange_rate: req.body.exchange_rate
          
        }, {
           where: {
            id : req.params.id
           }
         });
         console.log("update updateCurrency",updateCurrency)
         return res.json({
      id : updateCurrency.id,
      currency_name_AR: updateCurrency.currency_name_AR,
      currency_name_FR: updateCurrency.currency_name_FR, 
      currency_name_TR: updateCurrency.currency_name_TR,
      currency_name_EN: updateCurrency.currency_name_EN, 
      currency_code: updateCurrency.currency_code, 
      exchange_rate: updateCurrency.exchange_rate
     
    });
    }catch(err){
      res.status(500);
      throw new Error('failed to update');
    }
  });
  
  const deleteCurrencies = asyncHandler(async(req,res,next)=> {
    try{
    let deleteRecord;
   deleteRecord = await Currency.destroy({
        where: {
            id: req.params.id
        }
    })
    }
    catch(error){
        res.status(500).json(error);
    }
    res.status(200).json({message:"Deleted successfully"}); 
  });


  const postMarkters = asyncHandler(async (req, res, next) => {
    const {
      marketer_name,
      coupon_code, 
      discount_percentage,
      coupon_duration,
      is_Active } = req.body;
  
    let createdMarkter;
  
    try {
      createdMarkter = await Marketer.create({
        marketer_name,
        coupon_code, 
        discount_percentage,
        coupon_duration,
        is_Active
      });
    } catch (err) {
      res.status(500);
      throw new Error(err);
    }
    res.json(createdMarkter);
  });
  
  
  const getMarkters= asyncHandler(async (req, res, next) => {
    let Markters;
    try {
      Markters = await Marketer.findAll();
    } catch{
      res.status(500);
      throw new Error('something went wrong');
    }
    res.json(Markters);
  });
  
  const updateMarkters = asyncHandler(async (req, res) => {
    console.log("req.body", req.body);
       let updateMarkter;
       try{
        updateMarkter = await Marketer.update({
          marketer_name : req.body.marketer_name,
      coupon_code: req.body.coupon_code, 
      discount_percentage: req.body.discount_percentage,
      coupon_duration: req.body.coupon_duration,
      is_Active: req.body.is_Active
          
        }, {
           where: {
            id : req.params.id
           }
         });
         console.log("update updateMarkter",updateMarkter)
         return res.json({
      id : updateMarkter.id,
      marketer_name : updateMarkter.marketer_name,
      coupon_code: updateMarkter.coupon_code, 
      discount_percentage: updateMarkter.discount_percentage,
      coupon_duration: updateMarkter.coupon_duration,
      is_Active: updateMarkter.is_Active
     
    });
    }catch(err){
      res.status(500);
      throw new Error('failed to update');
    }
  });
  
  const deleteMarkters = asyncHandler(async(req,res,next)=> {
    try{
    let deleteRecord;
   deleteRecord = await Marketer.destroy({
        where: {
            id: req.params.id
        }
    })
    }
    catch(error){
        res.status(500).json(error);
    }
    res.status(200).json({message:"Deleted successfully"}); 
  });



  const postAdvertsmentCard = asyncHandler(async (req, res, next) => {
    const { image_ar_url,
      image_tr_url, 
      image_en_url,
      image_fr_url, } = req.body;
  
    let createdAds;
  
    try {
      createdAds = await AdvertsmentCard.create({
        image_ar_url,
      image_tr_url, 
      image_en_url,
      image_fr_url,
      });
    } catch (err) {
      res.status(500);
      throw new Error(err);
    }
    res.json(createdAds);
  });
  
  
  const getAdvertsmentCard= asyncHandler(async (req, res, next) => {
    let Ads;
    try {
      Ads = await AdvertsmentCard.findAll();
    } catch{
      res.status(500);
      throw new Error('something went wrong');
    }
    res.json(Ads);
  });
  
  const updateAdvertsmentCard = asyncHandler(async (req, res) => {
    console.log("req.body", req.body);
       let updateAds;
       try{
        updateAds = await AdvertsmentCard.update({
          image_ar_url: req.body.image_ar_url,
          image_tr_url: req.body.image_tr_url,
          image_en_url: req.body.image_en_url,
          image_fr_url: req.body.image_fr_url
          
        }, {
           where: {
            id : req.params.id
           }
         });
         console.log("update updateAds",updateAds)
         return res.json({
      id : updateAds.id,
      image_ar_url: updateAds.image_ar_url,
      image_tr_url: updateAds.image_tr_url,
      image_en_url: updateAds.image_en_url,
      image_fr_url: updateAds.image_fr_url
     
    });
    }catch(err){
      res.status(500);
      throw new Error('failed to update');
    }
  });
  
  const deleteAdvertsmentCard = asyncHandler(async(req,res,next)=> {
    try{
    let deleteRecord;
   deleteRecord = AdvertsmentCard.destroy({
        where: {
            id: req.params.id
        }
    })
    }
    catch(error){
        res.status(500).json(error);
    }
    res.status(200).json({message:"Deleted successfully"}); 
  });


  const postCategories = asyncHandler(async (req, res, next) => {
    const { category_name,
      category_slug_name, 
      category_image_url,
       } = req.body;
  
    let createdCategory;
  
    try {
      createdCategory = await Category.create({
        category_name,
      category_slug_name, 
      category_image_url,
   
      });
    } catch (err) {
      res.status(500);
      throw new Error(err);
    }
    res.json(createdCategory);
  });
  
  
  const getCategories= asyncHandler(async (req, res, next) => {
    let category;
    try {
      category = await Category.findAll();
    } catch{
      res.status(500);
      throw new Error('something went wrong');
    }
    res.json(category);
  });
  
  const updateCategories= asyncHandler(async (req, res) => {
    console.log("req.body", req.body);
       let updateCategory;
       try{
        updateCategory = await Category.update({
          category_name: req.body.category_name,
          category_slug_name: req.body.category_slug_name,
          category_image_url: req.body.category_image_url
   
        }, {
           where: {
            id : req.params.id
           }
         });
         console.log("update updateCategory",updateCategory)
         return res.json({
      id : updateCategory.id,
      category_name: updateCategory.image_ar_url,
      category_slug_name: updateCategory.category_slug_name,
      category_image_url: updateCategory.category_image_url,
      
    });
    }catch(err){
      res.status(500);
      throw new Error('failed to update');
    }
  });
  
  const deleteCategories = asyncHandler(async(req,res,next)=> {
    try{
    let deleteRecord;
   deleteRecord = await Category.destroy({
        where: {
            id: req.params.id
        }
    })
    }
    catch(error){
        res.status(500).json(error);
    }
    res.status(200).json({message:"Deleted successfully"}); 
  });

  const getAnnouncementEmails = asyncHandler(async (req, res, next) => {
    let announceEmail;
    try {
      announceEmail = await AnnouncementEmails.findAll();
    } catch{
      res.status(500);
      throw new Error('something went wrong');
    }
    res.json(announceEmail);
  });
  
  const postAnnouncementEmails = asyncHandler(async (req, res, next) => {
    const { email } = req.body;
  
    console.log(email)
  
    let createdAnnounceEmail;
  
    try {
      createdAnnounceEmail = await AnnouncementEmails.create({
        email,
      });
    } catch (err) {
      res.status(500);
      throw new Error(err);
    }
  
    res.json(createdAnnounceEmail);
  });
 
  const  deleteAnnounceEmail = asyncHandler(async(req,res,next)=> {
    try{
    let deleteRecord;
   deleteRecord = await AnnouncementEmails.destroy({
        where: {
            id: req.params.id
        }
    })
    }
    catch(error){
        res.status(500).json(error);
    }
    res.status(200).json({message:"Deleted successfully"}); 
  });
exports.getPrivacyPolicy = getPrivacyPolicy;
exports.getAllTopSliderImages = getAllTopSliderImages;
exports.getAllCountries = getAllCountries;
exports.getBanner = getBanner;
exports.postBanner = postBanner;
exports.postPrivacyPolicy = postPrivacyPolicy;
exports.updatePrivacyPolicy = updatePrivacyPolicy;
exports.deletePrivacyPolicy = deletePrivacyPolicy;
exports.updateBanner = updateBanner;
exports.deleteBanner = deleteBanner;
exports.getAbout = getAbout;
exports.deleteAbout = deleteAbout;
exports.updateAboutCompany = updateAboutCompany;
exports.postAbout = postAbout;
exports.postTopSliderImages = postTopSliderImages;
exports.updateTopSliderImages = updateTopSliderImages;
exports.deleteTopSliderImages = deleteTopSliderImages;
exports.postCountries = postCountries;
exports.updateCountries = updateCountries;
exports.deleteCountries = deleteCountries;
exports.getBottomSliderImages = getBottomSliderImages;
exports.postBottomSliderImages = postBottomSliderImages;
exports.updateBottomSliderImages = updateBottomSliderImages;
exports.deleteBottomSliderImages = deleteBottomSliderImages;
exports.postSocialAccounts = postSocialAccounts;
exports.getSocialAccounts = getSocialAccounts;
exports.updateSocialAccounts = updateSocialAccounts;
exports.deleteSocialAccounts = deleteSocialAccounts;
exports.postCurrencies = postCurrencies;
exports.getCurrencies = getCurrencies;
exports.updateCurrencies = updateCurrencies;
exports.deleteCurrencies = deleteCurrencies;
exports.postAdvertsmentCard = postAdvertsmentCard;
exports.getAdvertsmentCard = getAdvertsmentCard;
exports.updateAdvertsmentCard = updateAdvertsmentCard;
exports.deleteAdvertsmentCard = deleteAdvertsmentCard;
exports.postMarkters = postMarkters;
exports.getMarkters = getMarkters;
exports.updateMarkters = updateMarkters;
exports.deleteMarkters = deleteMarkters;
exports.postCategories = postCategories;
exports.getCategories = getCategories;
exports.updateCategories = updateCategories;
exports.deleteCategories = deleteCategories;
exports.getAnnouncementEmails = getAnnouncementEmails;
exports.postAnnouncementEmails = postAnnouncementEmails;
exports.deleteAnnounceEmail = deleteAnnounceEmail;