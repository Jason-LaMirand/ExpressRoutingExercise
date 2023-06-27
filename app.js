const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

const { findMean, convertAndValidateNumsArray, findMode, findMedian } = require('./math');


app.get('/mean', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You did not input the correct characters.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');

    let nums = convertAndValidateNumsArray(numsAsStrings);

    let result = {
        operation: "mean",
        result: findMean(nums)
    }

    return res.send(result);
});

app.get('/mode', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You did not input the correct characters.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');

    let nums = convertAndValidateNumsArray(numsAsStrings);

    let result = {
        operation: "mode",
        result: findMode(nums)
    }

    return res.send(result);
});

app.get('/median', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You did not input the correct characters.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');

    let nums = convertAndValidateNumsArray(numsAsStrings);

    let result = {
        operation: "median",
        result: findMedian(nums)
    }

    return res.send(result);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));