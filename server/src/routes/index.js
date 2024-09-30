const express = require('express')
const { Router } = require("express");
const { getAllCountries, getCountryById } = require('../controllers/countryController');
const router = Router()

router.use(express.json())


router.get('/', getAllCountries)

router.get('/:id', getCountryById)

module.exports = router
