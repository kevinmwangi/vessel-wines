module.exports = {
  // Load Mock Product Data Into localStorage
  init: function () {
    localStorage.clear();
    localStorage.setItem('products', JSON.stringify([
        { id: 1, name: "Breidecker", casePrice: 100, bottlePrice: 10, image: '09riesling.png', description:"A wonderful product" },
      {  id: 2, name: "Chardony", casePrice: 100, bottlePrice: 10, image: '09riesling_v.png', description:"A wonderful product" },
      {  id: 3, name: "Lovedale1", casePrice: 100, bottlePrice: 10, image: 'chardonnay_v_1.png', description:"A wonderful product" },
      {  id: 4, name: "Lovedale2", casePrice: 100, bottlePrice: 10, image: 'Hukapapa_v.png', description:"A wonderful product" },
      {  id: 5, name: "Lovedale3", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" },
      {  id: 6, name: "Lovedale4", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" },
      {  id: 7, name: "Lovedale5", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" },
      {  id: 8, name: "Lovedale6", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" },
      {  id: 9, name: "Lovedale7", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" },
      {  id: 10, name: "Lovedale8", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" },
      {  id: 11, name: "Lovedale9", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" },
      {  id: 12, name: "Lovedale10", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" },
      {  id: 13, name: "Lovedale11", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" },
      {  id: 14, name: "Lovedale12", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" },
      {  id: 15, name: "Lovedale13", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" },
      {  id: 16, name: "Lovedale14", casePrice: 100, bottlePrice: 10, image: 'Hunters_Gewurztraminer_NV_-_webv.png', description:"A wonderful product" }
    ]));
  }

};
