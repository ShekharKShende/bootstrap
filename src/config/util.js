let idx = (function getIndex() {
    var idx = 7;
    return function () {
        return idx++;
    }
})();
export default idx;