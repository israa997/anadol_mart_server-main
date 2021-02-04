const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/homeCotroller');


router.get('/topSlideImages', HomeController.getAllTopSliderImages);
router.post('/addTopSlyderImage', HomeController.postTopSliderImages);
router.put('/editTopSlyderImage/:id', HomeController.updateTopSliderImages);
router.delete('/deleteTopSlyderImage/:id', HomeController.deleteTopSliderImages);

router.get('/privacy-policy', HomeController.getPrivacyPolicy);
router.post('/addPrivacy-Policy', HomeController.postPrivacyPolicy);
router.put('/editPrivacy-Policy/:id', HomeController.updatePrivacyPolicy);
router.delete('/deletePrivacy-Policy/:id', HomeController.deletePrivacyPolicy);

router.get('/countries', HomeController.getAllCountries);
router.post('/addCountry', HomeController.postCountries);
router.put('/editCountry/:id', HomeController.updateCountries);
router.delete('/deleteCountry/:id', HomeController.deleteCountries);


router.get('/banner', HomeController.getBanner);
router.post('/addBanner', HomeController.postBanner);
router.put('/editBanner/:id', HomeController.updateBanner);
router.delete('/deleteBanner/:id', HomeController.deleteBanner);

router.get('/about', HomeController.getAbout);
router.post('/addAbout', HomeController.postAbout);
router.put('/editAbout/:id', HomeController.updateAboutCompany);
router.delete('/deleteAbout/:id', HomeController.deleteAbout);




router.post('/postSocial-accounts', HomeController.postSocialAccounts);
router.get('/social-accounts', HomeController.getSocialAccounts);
router.put('/editSocialAccounts/:id', HomeController.updateSocialAccounts);
router.delete('/deleteSocialAccounts/:id', HomeController.deleteSocialAccounts);


router.get('/bottomSlideImages', HomeController.getBottomSliderImages);
router.post('/addBottomSlyderImage', HomeController.postBottomSliderImages);
router.put('/editBottomSlyderImage/:id', HomeController.updateBottomSliderImages);
router.delete('/deleteBottomSlyderImage/:id', HomeController.deleteBottomSliderImages);


router.get('/currencies', HomeController.getCurrencies);
router.post('/addCurrency', HomeController.postCurrencies);
router.put('/editCurrency/:id', HomeController.updateCurrencies);
router.delete('/deleteCurrency/:id', HomeController.deleteCurrencies);


router.get('/Ads', HomeController.getAdvertsmentCard);
router.post('/addAdvertsmentCard', HomeController.postAdvertsmentCard);
router.put('/editAdvertsmentCard/:id', HomeController.updateAdvertsmentCard);
router.delete('/deleteAdvertsmentCard/:id', HomeController.deleteAdvertsmentCard);


router.get('/marketers', HomeController.getMarkters);
router.post('/addMarkters', HomeController.postMarkters);
router.put('/editMarkters/:id', HomeController.updateMarkters);
router.delete('/deleteMarkters/:id', HomeController.deleteMarkters);


router.get('/categories', HomeController.getCategories);
router.post('/addCategories', HomeController.postCategories);
router.put('/editCategories/:id', HomeController.updateCategories);
router.delete('/deleteCategories/:id', HomeController.deleteCategories);

router.get('/announce-email', HomeController.getAnnouncementEmails);
router.post('/postAnnounce-email', HomeController.postAnnouncementEmails);
router.delete('/deleteAnnounce-email/:id', HomeController.deleteAnnounceEmail);
module.exports = router;
