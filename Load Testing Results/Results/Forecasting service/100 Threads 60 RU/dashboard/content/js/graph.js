/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 227.0, "minX": 0.0, "maxY": 1500.0, "series": [{"data": [[0.0, 227.0], [0.1, 227.0], [0.2, 227.0], [0.3, 227.0], [0.4, 227.0], [0.5, 227.0], [0.6, 227.0], [0.7, 227.0], [0.8, 227.0], [0.9, 227.0], [1.0, 228.0], [1.1, 228.0], [1.2, 228.0], [1.3, 228.0], [1.4, 228.0], [1.5, 228.0], [1.6, 228.0], [1.7, 228.0], [1.8, 228.0], [1.9, 228.0], [2.0, 230.0], [2.1, 230.0], [2.2, 230.0], [2.3, 230.0], [2.4, 230.0], [2.5, 230.0], [2.6, 230.0], [2.7, 230.0], [2.8, 230.0], [2.9, 230.0], [3.0, 233.0], [3.1, 233.0], [3.2, 233.0], [3.3, 233.0], [3.4, 233.0], [3.5, 233.0], [3.6, 233.0], [3.7, 233.0], [3.8, 233.0], [3.9, 233.0], [4.0, 234.0], [4.1, 234.0], [4.2, 234.0], [4.3, 234.0], [4.4, 234.0], [4.5, 234.0], [4.6, 234.0], [4.7, 234.0], [4.8, 234.0], [4.9, 234.0], [5.0, 235.0], [5.1, 235.0], [5.2, 235.0], [5.3, 235.0], [5.4, 235.0], [5.5, 235.0], [5.6, 235.0], [5.7, 235.0], [5.8, 235.0], [5.9, 235.0], [6.0, 235.0], [6.1, 235.0], [6.2, 235.0], [6.3, 235.0], [6.4, 235.0], [6.5, 235.0], [6.6, 235.0], [6.7, 235.0], [6.8, 235.0], [6.9, 235.0], [7.0, 236.0], [7.1, 236.0], [7.2, 236.0], [7.3, 236.0], [7.4, 236.0], [7.5, 236.0], [7.6, 236.0], [7.7, 236.0], [7.8, 236.0], [7.9, 236.0], [8.0, 238.0], [8.1, 238.0], [8.2, 238.0], [8.3, 238.0], [8.4, 238.0], [8.5, 238.0], [8.6, 238.0], [8.7, 238.0], [8.8, 238.0], [8.9, 238.0], [9.0, 238.0], [9.1, 238.0], [9.2, 238.0], [9.3, 238.0], [9.4, 238.0], [9.5, 238.0], [9.6, 238.0], [9.7, 238.0], [9.8, 238.0], [9.9, 238.0], [10.0, 239.0], [10.1, 239.0], [10.2, 239.0], [10.3, 239.0], [10.4, 239.0], [10.5, 239.0], [10.6, 239.0], [10.7, 239.0], [10.8, 239.0], [10.9, 239.0], [11.0, 239.0], [11.1, 239.0], [11.2, 239.0], [11.3, 239.0], [11.4, 239.0], [11.5, 239.0], [11.6, 239.0], [11.7, 239.0], [11.8, 239.0], [11.9, 239.0], [12.0, 240.0], [12.1, 240.0], [12.2, 240.0], [12.3, 240.0], [12.4, 240.0], [12.5, 240.0], [12.6, 240.0], [12.7, 240.0], [12.8, 240.0], [12.9, 240.0], [13.0, 240.0], [13.1, 240.0], [13.2, 240.0], [13.3, 240.0], [13.4, 240.0], [13.5, 240.0], [13.6, 240.0], [13.7, 240.0], [13.8, 240.0], [13.9, 240.0], [14.0, 240.0], [14.1, 240.0], [14.2, 240.0], [14.3, 240.0], [14.4, 240.0], [14.5, 240.0], [14.6, 240.0], [14.7, 240.0], [14.8, 240.0], [14.9, 240.0], [15.0, 242.0], [15.1, 242.0], [15.2, 242.0], [15.3, 242.0], [15.4, 242.0], [15.5, 242.0], [15.6, 242.0], [15.7, 242.0], [15.8, 242.0], [15.9, 242.0], [16.0, 242.0], [16.1, 242.0], [16.2, 242.0], [16.3, 242.0], [16.4, 242.0], [16.5, 242.0], [16.6, 242.0], [16.7, 242.0], [16.8, 242.0], [16.9, 242.0], [17.0, 243.0], [17.1, 243.0], [17.2, 243.0], [17.3, 243.0], [17.4, 243.0], [17.5, 243.0], [17.6, 243.0], [17.7, 243.0], [17.8, 243.0], [17.9, 243.0], [18.0, 243.0], [18.1, 243.0], [18.2, 243.0], [18.3, 243.0], [18.4, 243.0], [18.5, 243.0], [18.6, 243.0], [18.7, 243.0], [18.8, 243.0], [18.9, 243.0], [19.0, 244.0], [19.1, 244.0], [19.2, 244.0], [19.3, 244.0], [19.4, 244.0], [19.5, 244.0], [19.6, 244.0], [19.7, 244.0], [19.8, 244.0], [19.9, 244.0], [20.0, 244.0], [20.1, 244.0], [20.2, 244.0], [20.3, 244.0], [20.4, 244.0], [20.5, 244.0], [20.6, 244.0], [20.7, 244.0], [20.8, 244.0], [20.9, 244.0], [21.0, 244.0], [21.1, 244.0], [21.2, 244.0], [21.3, 244.0], [21.4, 244.0], [21.5, 244.0], [21.6, 244.0], [21.7, 244.0], [21.8, 244.0], [21.9, 244.0], [22.0, 245.0], [22.1, 245.0], [22.2, 245.0], [22.3, 245.0], [22.4, 245.0], [22.5, 245.0], [22.6, 245.0], [22.7, 245.0], [22.8, 245.0], [22.9, 245.0], [23.0, 246.0], [23.1, 246.0], [23.2, 246.0], [23.3, 246.0], [23.4, 246.0], [23.5, 246.0], [23.6, 246.0], [23.7, 246.0], [23.8, 246.0], [23.9, 246.0], [24.0, 246.0], [24.1, 246.0], [24.2, 246.0], [24.3, 246.0], [24.4, 246.0], [24.5, 246.0], [24.6, 246.0], [24.7, 246.0], [24.8, 246.0], [24.9, 246.0], [25.0, 248.0], [25.1, 248.0], [25.2, 248.0], [25.3, 248.0], [25.4, 248.0], [25.5, 248.0], [25.6, 248.0], [25.7, 248.0], [25.8, 248.0], [25.9, 248.0], [26.0, 249.0], [26.1, 249.0], [26.2, 249.0], [26.3, 249.0], [26.4, 249.0], [26.5, 249.0], [26.6, 249.0], [26.7, 249.0], [26.8, 249.0], [26.9, 249.0], [27.0, 251.0], [27.1, 251.0], [27.2, 251.0], [27.3, 251.0], [27.4, 251.0], [27.5, 251.0], [27.6, 251.0], [27.7, 251.0], [27.8, 251.0], [27.9, 251.0], [28.0, 251.0], [28.1, 251.0], [28.2, 251.0], [28.3, 251.0], [28.4, 251.0], [28.5, 251.0], [28.6, 251.0], [28.7, 251.0], [28.8, 251.0], [28.9, 251.0], [29.0, 252.0], [29.1, 252.0], [29.2, 252.0], [29.3, 252.0], [29.4, 252.0], [29.5, 252.0], [29.6, 252.0], [29.7, 252.0], [29.8, 252.0], [29.9, 252.0], [30.0, 253.0], [30.1, 253.0], [30.2, 253.0], [30.3, 253.0], [30.4, 253.0], [30.5, 253.0], [30.6, 253.0], [30.7, 253.0], [30.8, 253.0], [30.9, 253.0], [31.0, 253.0], [31.1, 253.0], [31.2, 253.0], [31.3, 253.0], [31.4, 253.0], [31.5, 253.0], [31.6, 253.0], [31.7, 253.0], [31.8, 253.0], [31.9, 253.0], [32.0, 253.0], [32.1, 253.0], [32.2, 253.0], [32.3, 253.0], [32.4, 253.0], [32.5, 253.0], [32.6, 253.0], [32.7, 253.0], [32.8, 253.0], [32.9, 253.0], [33.0, 253.0], [33.1, 253.0], [33.2, 253.0], [33.3, 253.0], [33.4, 253.0], [33.5, 253.0], [33.6, 253.0], [33.7, 253.0], [33.8, 253.0], [33.9, 253.0], [34.0, 254.0], [34.1, 254.0], [34.2, 254.0], [34.3, 254.0], [34.4, 254.0], [34.5, 254.0], [34.6, 254.0], [34.7, 254.0], [34.8, 254.0], [34.9, 254.0], [35.0, 255.0], [35.1, 255.0], [35.2, 255.0], [35.3, 255.0], [35.4, 255.0], [35.5, 255.0], [35.6, 255.0], [35.7, 255.0], [35.8, 255.0], [35.9, 255.0], [36.0, 255.0], [36.1, 255.0], [36.2, 255.0], [36.3, 255.0], [36.4, 255.0], [36.5, 255.0], [36.6, 255.0], [36.7, 255.0], [36.8, 255.0], [36.9, 255.0], [37.0, 256.0], [37.1, 256.0], [37.2, 256.0], [37.3, 256.0], [37.4, 256.0], [37.5, 256.0], [37.6, 256.0], [37.7, 256.0], [37.8, 256.0], [37.9, 256.0], [38.0, 258.0], [38.1, 258.0], [38.2, 258.0], [38.3, 258.0], [38.4, 258.0], [38.5, 258.0], [38.6, 258.0], [38.7, 258.0], [38.8, 258.0], [38.9, 258.0], [39.0, 260.0], [39.1, 260.0], [39.2, 260.0], [39.3, 260.0], [39.4, 260.0], [39.5, 260.0], [39.6, 260.0], [39.7, 260.0], [39.8, 260.0], [39.9, 260.0], [40.0, 262.0], [40.1, 262.0], [40.2, 262.0], [40.3, 262.0], [40.4, 262.0], [40.5, 262.0], [40.6, 262.0], [40.7, 262.0], [40.8, 262.0], [40.9, 262.0], [41.0, 264.0], [41.1, 264.0], [41.2, 264.0], [41.3, 264.0], [41.4, 264.0], [41.5, 264.0], [41.6, 264.0], [41.7, 264.0], [41.8, 264.0], [41.9, 264.0], [42.0, 265.0], [42.1, 265.0], [42.2, 265.0], [42.3, 265.0], [42.4, 265.0], [42.5, 265.0], [42.6, 265.0], [42.7, 265.0], [42.8, 265.0], [42.9, 265.0], [43.0, 266.0], [43.1, 266.0], [43.2, 266.0], [43.3, 266.0], [43.4, 266.0], [43.5, 266.0], [43.6, 266.0], [43.7, 266.0], [43.8, 266.0], [43.9, 266.0], [44.0, 271.0], [44.1, 271.0], [44.2, 271.0], [44.3, 271.0], [44.4, 271.0], [44.5, 271.0], [44.6, 271.0], [44.7, 271.0], [44.8, 271.0], [44.9, 271.0], [45.0, 272.0], [45.1, 272.0], [45.2, 272.0], [45.3, 272.0], [45.4, 272.0], [45.5, 272.0], [45.6, 272.0], [45.7, 272.0], [45.8, 272.0], [45.9, 272.0], [46.0, 273.0], [46.1, 273.0], [46.2, 273.0], [46.3, 273.0], [46.4, 273.0], [46.5, 273.0], [46.6, 273.0], [46.7, 273.0], [46.8, 273.0], [46.9, 273.0], [47.0, 276.0], [47.1, 276.0], [47.2, 276.0], [47.3, 276.0], [47.4, 276.0], [47.5, 276.0], [47.6, 276.0], [47.7, 276.0], [47.8, 276.0], [47.9, 276.0], [48.0, 278.0], [48.1, 278.0], [48.2, 278.0], [48.3, 278.0], [48.4, 278.0], [48.5, 278.0], [48.6, 278.0], [48.7, 278.0], [48.8, 278.0], [48.9, 278.0], [49.0, 278.0], [49.1, 278.0], [49.2, 278.0], [49.3, 278.0], [49.4, 278.0], [49.5, 278.0], [49.6, 278.0], [49.7, 278.0], [49.8, 278.0], [49.9, 278.0], [50.0, 278.0], [50.1, 278.0], [50.2, 278.0], [50.3, 278.0], [50.4, 278.0], [50.5, 278.0], [50.6, 278.0], [50.7, 278.0], [50.8, 278.0], [50.9, 278.0], [51.0, 278.0], [51.1, 278.0], [51.2, 278.0], [51.3, 278.0], [51.4, 278.0], [51.5, 278.0], [51.6, 278.0], [51.7, 278.0], [51.8, 278.0], [51.9, 278.0], [52.0, 279.0], [52.1, 279.0], [52.2, 279.0], [52.3, 279.0], [52.4, 279.0], [52.5, 279.0], [52.6, 279.0], [52.7, 279.0], [52.8, 279.0], [52.9, 279.0], [53.0, 281.0], [53.1, 281.0], [53.2, 281.0], [53.3, 281.0], [53.4, 281.0], [53.5, 281.0], [53.6, 281.0], [53.7, 281.0], [53.8, 281.0], [53.9, 281.0], [54.0, 281.0], [54.1, 281.0], [54.2, 281.0], [54.3, 281.0], [54.4, 281.0], [54.5, 281.0], [54.6, 281.0], [54.7, 281.0], [54.8, 281.0], [54.9, 281.0], [55.0, 284.0], [55.1, 284.0], [55.2, 284.0], [55.3, 284.0], [55.4, 284.0], [55.5, 284.0], [55.6, 284.0], [55.7, 284.0], [55.8, 284.0], [55.9, 284.0], [56.0, 284.0], [56.1, 284.0], [56.2, 284.0], [56.3, 284.0], [56.4, 284.0], [56.5, 284.0], [56.6, 284.0], [56.7, 284.0], [56.8, 284.0], [56.9, 284.0], [57.0, 284.0], [57.1, 284.0], [57.2, 284.0], [57.3, 284.0], [57.4, 284.0], [57.5, 284.0], [57.6, 284.0], [57.7, 284.0], [57.8, 284.0], [57.9, 284.0], [58.0, 284.0], [58.1, 284.0], [58.2, 284.0], [58.3, 284.0], [58.4, 284.0], [58.5, 284.0], [58.6, 284.0], [58.7, 284.0], [58.8, 284.0], [58.9, 284.0], [59.0, 287.0], [59.1, 287.0], [59.2, 287.0], [59.3, 287.0], [59.4, 287.0], [59.5, 287.0], [59.6, 287.0], [59.7, 287.0], [59.8, 287.0], [59.9, 287.0], [60.0, 287.0], [60.1, 287.0], [60.2, 287.0], [60.3, 287.0], [60.4, 287.0], [60.5, 287.0], [60.6, 287.0], [60.7, 287.0], [60.8, 287.0], [60.9, 287.0], [61.0, 289.0], [61.1, 289.0], [61.2, 289.0], [61.3, 289.0], [61.4, 289.0], [61.5, 289.0], [61.6, 289.0], [61.7, 289.0], [61.8, 289.0], [61.9, 289.0], [62.0, 290.0], [62.1, 290.0], [62.2, 290.0], [62.3, 290.0], [62.4, 290.0], [62.5, 290.0], [62.6, 290.0], [62.7, 290.0], [62.8, 290.0], [62.9, 290.0], [63.0, 291.0], [63.1, 291.0], [63.2, 291.0], [63.3, 291.0], [63.4, 291.0], [63.5, 291.0], [63.6, 291.0], [63.7, 291.0], [63.8, 291.0], [63.9, 291.0], [64.0, 292.0], [64.1, 292.0], [64.2, 292.0], [64.3, 292.0], [64.4, 292.0], [64.5, 292.0], [64.6, 292.0], [64.7, 292.0], [64.8, 292.0], [64.9, 292.0], [65.0, 293.0], [65.1, 293.0], [65.2, 293.0], [65.3, 293.0], [65.4, 293.0], [65.5, 293.0], [65.6, 293.0], [65.7, 293.0], [65.8, 293.0], [65.9, 293.0], [66.0, 295.0], [66.1, 295.0], [66.2, 295.0], [66.3, 295.0], [66.4, 295.0], [66.5, 295.0], [66.6, 295.0], [66.7, 295.0], [66.8, 295.0], [66.9, 295.0], [67.0, 299.0], [67.1, 299.0], [67.2, 299.0], [67.3, 299.0], [67.4, 299.0], [67.5, 299.0], [67.6, 299.0], [67.7, 299.0], [67.8, 299.0], [67.9, 299.0], [68.0, 304.0], [68.1, 304.0], [68.2, 304.0], [68.3, 304.0], [68.4, 304.0], [68.5, 304.0], [68.6, 304.0], [68.7, 304.0], [68.8, 304.0], [68.9, 304.0], [69.0, 314.0], [69.1, 314.0], [69.2, 314.0], [69.3, 314.0], [69.4, 314.0], [69.5, 314.0], [69.6, 314.0], [69.7, 314.0], [69.8, 314.0], [69.9, 314.0], [70.0, 315.0], [70.1, 315.0], [70.2, 315.0], [70.3, 315.0], [70.4, 315.0], [70.5, 315.0], [70.6, 315.0], [70.7, 315.0], [70.8, 315.0], [70.9, 315.0], [71.0, 317.0], [71.1, 317.0], [71.2, 317.0], [71.3, 317.0], [71.4, 317.0], [71.5, 317.0], [71.6, 317.0], [71.7, 317.0], [71.8, 317.0], [71.9, 317.0], [72.0, 318.0], [72.1, 318.0], [72.2, 318.0], [72.3, 318.0], [72.4, 318.0], [72.5, 318.0], [72.6, 318.0], [72.7, 318.0], [72.8, 318.0], [72.9, 318.0], [73.0, 324.0], [73.1, 324.0], [73.2, 324.0], [73.3, 324.0], [73.4, 324.0], [73.5, 324.0], [73.6, 324.0], [73.7, 324.0], [73.8, 324.0], [73.9, 324.0], [74.0, 326.0], [74.1, 326.0], [74.2, 326.0], [74.3, 326.0], [74.4, 326.0], [74.5, 326.0], [74.6, 326.0], [74.7, 326.0], [74.8, 326.0], [74.9, 326.0], [75.0, 329.0], [75.1, 329.0], [75.2, 329.0], [75.3, 329.0], [75.4, 329.0], [75.5, 329.0], [75.6, 329.0], [75.7, 329.0], [75.8, 329.0], [75.9, 329.0], [76.0, 330.0], [76.1, 330.0], [76.2, 330.0], [76.3, 330.0], [76.4, 330.0], [76.5, 330.0], [76.6, 330.0], [76.7, 330.0], [76.8, 330.0], [76.9, 330.0], [77.0, 334.0], [77.1, 334.0], [77.2, 334.0], [77.3, 334.0], [77.4, 334.0], [77.5, 334.0], [77.6, 334.0], [77.7, 334.0], [77.8, 334.0], [77.9, 334.0], [78.0, 354.0], [78.1, 354.0], [78.2, 354.0], [78.3, 354.0], [78.4, 354.0], [78.5, 354.0], [78.6, 354.0], [78.7, 354.0], [78.8, 354.0], [78.9, 354.0], [79.0, 391.0], [79.1, 391.0], [79.2, 391.0], [79.3, 391.0], [79.4, 391.0], [79.5, 391.0], [79.6, 391.0], [79.7, 391.0], [79.8, 391.0], [79.9, 391.0], [80.0, 397.0], [80.1, 397.0], [80.2, 397.0], [80.3, 397.0], [80.4, 397.0], [80.5, 397.0], [80.6, 397.0], [80.7, 397.0], [80.8, 397.0], [80.9, 397.0], [81.0, 447.0], [81.1, 447.0], [81.2, 447.0], [81.3, 447.0], [81.4, 447.0], [81.5, 447.0], [81.6, 447.0], [81.7, 447.0], [81.8, 447.0], [81.9, 447.0], [82.0, 454.0], [82.1, 454.0], [82.2, 454.0], [82.3, 454.0], [82.4, 454.0], [82.5, 454.0], [82.6, 454.0], [82.7, 454.0], [82.8, 454.0], [82.9, 454.0], [83.0, 469.0], [83.1, 469.0], [83.2, 469.0], [83.3, 469.0], [83.4, 469.0], [83.5, 469.0], [83.6, 469.0], [83.7, 469.0], [83.8, 469.0], [83.9, 469.0], [84.0, 488.0], [84.1, 488.0], [84.2, 488.0], [84.3, 488.0], [84.4, 488.0], [84.5, 488.0], [84.6, 488.0], [84.7, 488.0], [84.8, 488.0], [84.9, 488.0], [85.0, 494.0], [85.1, 494.0], [85.2, 494.0], [85.3, 494.0], [85.4, 494.0], [85.5, 494.0], [85.6, 494.0], [85.7, 494.0], [85.8, 494.0], [85.9, 494.0], [86.0, 495.0], [86.1, 495.0], [86.2, 495.0], [86.3, 495.0], [86.4, 495.0], [86.5, 495.0], [86.6, 495.0], [86.7, 495.0], [86.8, 495.0], [86.9, 495.0], [87.0, 505.0], [87.1, 505.0], [87.2, 505.0], [87.3, 505.0], [87.4, 505.0], [87.5, 505.0], [87.6, 505.0], [87.7, 505.0], [87.8, 505.0], [87.9, 505.0], [88.0, 667.0], [88.1, 667.0], [88.2, 667.0], [88.3, 667.0], [88.4, 667.0], [88.5, 667.0], [88.6, 667.0], [88.7, 667.0], [88.8, 667.0], [88.9, 667.0], [89.0, 702.0], [89.1, 702.0], [89.2, 702.0], [89.3, 702.0], [89.4, 702.0], [89.5, 702.0], [89.6, 702.0], [89.7, 702.0], [89.8, 702.0], [89.9, 702.0], [90.0, 727.0], [90.1, 727.0], [90.2, 727.0], [90.3, 727.0], [90.4, 727.0], [90.5, 727.0], [90.6, 727.0], [90.7, 727.0], [90.8, 727.0], [90.9, 727.0], [91.0, 778.0], [91.1, 778.0], [91.2, 778.0], [91.3, 778.0], [91.4, 778.0], [91.5, 778.0], [91.6, 778.0], [91.7, 778.0], [91.8, 778.0], [91.9, 778.0], [92.0, 864.0], [92.1, 864.0], [92.2, 864.0], [92.3, 864.0], [92.4, 864.0], [92.5, 864.0], [92.6, 864.0], [92.7, 864.0], [92.8, 864.0], [92.9, 864.0], [93.0, 872.0], [93.1, 872.0], [93.2, 872.0], [93.3, 872.0], [93.4, 872.0], [93.5, 872.0], [93.6, 872.0], [93.7, 872.0], [93.8, 872.0], [93.9, 872.0], [94.0, 905.0], [94.1, 905.0], [94.2, 905.0], [94.3, 905.0], [94.4, 905.0], [94.5, 905.0], [94.6, 905.0], [94.7, 905.0], [94.8, 905.0], [94.9, 905.0], [95.0, 978.0], [95.1, 978.0], [95.2, 978.0], [95.3, 978.0], [95.4, 978.0], [95.5, 978.0], [95.6, 978.0], [95.7, 978.0], [95.8, 978.0], [95.9, 978.0], [96.0, 1255.0], [96.1, 1255.0], [96.2, 1255.0], [96.3, 1255.0], [96.4, 1255.0], [96.5, 1255.0], [96.6, 1255.0], [96.7, 1255.0], [96.8, 1255.0], [96.9, 1255.0], [97.0, 1258.0], [97.1, 1258.0], [97.2, 1258.0], [97.3, 1258.0], [97.4, 1258.0], [97.5, 1258.0], [97.6, 1258.0], [97.7, 1258.0], [97.8, 1258.0], [97.9, 1258.0], [98.0, 1259.0], [98.1, 1259.0], [98.2, 1259.0], [98.3, 1259.0], [98.4, 1259.0], [98.5, 1259.0], [98.6, 1259.0], [98.7, 1259.0], [98.8, 1259.0], [98.9, 1259.0], [99.0, 1500.0], [99.1, 1500.0], [99.2, 1500.0], [99.3, 1500.0], [99.4, 1500.0], [99.5, 1500.0], [99.6, 1500.0], [99.7, 1500.0], [99.8, 1500.0], [99.9, 1500.0]], "isOverall": false, "label": "weather", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 68.0, "series": [{"data": [[300.0, 13.0], [1200.0, 3.0], [600.0, 1.0], [700.0, 3.0], [1500.0, 1.0], [400.0, 6.0], [800.0, 2.0], [200.0, 68.0], [900.0, 2.0], [500.0, 1.0]], "isOverall": false, "label": "weather", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 13.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 87.0, "series": [{"data": [[0.0, 87.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 13.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.646079915E12, "maxY": 1.625, "series": [{"data": [[1.646079965E12, 1.375], [1.646079945E12, 1.0], [1.646079925E12, 1.5], [1.646079915E12, 1.625], [1.64607996E12, 1.25], [1.64607994E12, 1.0], [1.64607992E12, 1.1111111111111112], [1.646079975E12, 1.0], [1.646079955E12, 1.0], [1.646079935E12, 1.0], [1.64607997E12, 1.0], [1.64607995E12, 1.0], [1.64607993E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.646079975E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 292.5842696629213, "minX": 1.0, "maxY": 1318.0, "series": [{"data": [[1.0, 292.5842696629213], [2.0, 827.2857142857142], [3.0, 1318.0]], "isOverall": false, "label": "weather", "isController": false}, {"data": [[1.15, 371.03000000000003]], "isOverall": false, "label": "weather-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 33.0, "minX": 1.646079915E12, "maxY": 447.2, "series": [{"data": [[1.646079965E12, 397.2], [1.646079945E12, 445.8], [1.646079925E12, 397.2], [1.646079915E12, 397.2], [1.64607996E12, 397.2], [1.64607994E12, 397.2], [1.64607992E12, 446.6], [1.646079975E12, 50.6], [1.646079955E12, 397.2], [1.646079935E12, 397.2], [1.64607997E12, 447.2], [1.64607995E12, 397.2], [1.64607993E12, 397.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.646079965E12, 264.0], [1.646079945E12, 297.0], [1.646079925E12, 264.0], [1.646079915E12, 264.0], [1.64607996E12, 264.0], [1.64607994E12, 264.0], [1.64607992E12, 297.0], [1.646079975E12, 33.0], [1.646079955E12, 264.0], [1.646079935E12, 264.0], [1.64607997E12, 297.0], [1.64607995E12, 264.0], [1.64607993E12, 264.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.646079975E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 257.5, "minX": 1.646079915E12, "maxY": 702.0, "series": [{"data": [[1.646079965E12, 492.25], [1.646079945E12, 270.22222222222223], [1.646079925E12, 543.25], [1.646079915E12, 675.25], [1.64607996E12, 411.625], [1.64607994E12, 257.5], [1.64607992E12, 385.77777777777777], [1.646079975E12, 702.0], [1.646079955E12, 259.0], [1.646079935E12, 260.125], [1.64607997E12, 315.77777777777777], [1.64607995E12, 267.625], [1.64607993E12, 290.24999999999994]], "isOverall": false, "label": "weather", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.646079975E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 257.375, "minX": 1.646079915E12, "maxY": 702.0, "series": [{"data": [[1.646079965E12, 492.125], [1.646079945E12, 270.0], [1.646079925E12, 542.625], [1.646079915E12, 675.125], [1.64607996E12, 411.125], [1.64607994E12, 257.375], [1.64607992E12, 385.55555555555554], [1.646079975E12, 702.0], [1.646079955E12, 258.875], [1.646079935E12, 260.0], [1.64607997E12, 315.77777777777777], [1.64607995E12, 267.5], [1.64607993E12, 290.125]], "isOverall": false, "label": "weather", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.646079975E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.875, "minX": 1.646079915E12, "maxY": 4.5, "series": [{"data": [[1.646079965E12, 1.25], [1.646079945E12, 1.1111111111111112], [1.646079925E12, 0.875], [1.646079915E12, 4.5], [1.64607996E12, 1.375], [1.64607994E12, 1.375], [1.64607992E12, 1.4444444444444444], [1.646079975E12, 1.0], [1.646079955E12, 1.625], [1.646079935E12, 1.5], [1.64607997E12, 1.4444444444444442], [1.64607995E12, 2.125], [1.64607993E12, 1.7499999999999998]], "isOverall": false, "label": "weather", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.646079975E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 227.0, "minX": 1.646079915E12, "maxY": 1500.0, "series": [{"data": [[1.646079965E12, 1258.0], [1.646079945E12, 315.0], [1.646079925E12, 1259.0], [1.646079915E12, 1500.0], [1.64607996E12, 978.0], [1.64607994E12, 279.0], [1.64607992E12, 778.0], [1.646079975E12, 702.0], [1.646079955E12, 284.0], [1.646079935E12, 290.0], [1.64607997E12, 495.0], [1.64607995E12, 334.0], [1.64607993E12, 454.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.646079965E12, 1258.0], [1.646079945E12, 315.0], [1.646079925E12, 1259.0], [1.646079915E12, 1500.0], [1.64607996E12, 978.0], [1.64607994E12, 279.0], [1.64607992E12, 778.0], [1.646079975E12, 702.0], [1.646079955E12, 284.0], [1.646079935E12, 290.0], [1.64607997E12, 495.0], [1.64607995E12, 334.0], [1.64607993E12, 454.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.646079965E12, 1258.0], [1.646079945E12, 315.0], [1.646079925E12, 1259.0], [1.646079915E12, 1500.0], [1.64607996E12, 978.0], [1.64607994E12, 279.0], [1.64607992E12, 778.0], [1.646079975E12, 702.0], [1.646079955E12, 284.0], [1.646079935E12, 290.0], [1.64607997E12, 495.0], [1.64607995E12, 334.0], [1.64607993E12, 454.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.646079965E12, 1258.0], [1.646079945E12, 315.0], [1.646079925E12, 1259.0], [1.646079915E12, 1500.0], [1.64607996E12, 978.0], [1.64607994E12, 279.0], [1.64607992E12, 778.0], [1.646079975E12, 702.0], [1.646079955E12, 284.0], [1.646079935E12, 290.0], [1.64607997E12, 495.0], [1.64607995E12, 334.0], [1.64607993E12, 454.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.646079965E12, 244.0], [1.646079945E12, 239.0], [1.646079925E12, 233.0], [1.646079915E12, 238.0], [1.64607996E12, 235.0], [1.64607994E12, 230.0], [1.64607992E12, 242.0], [1.646079975E12, 702.0], [1.646079955E12, 228.0], [1.646079935E12, 227.0], [1.64607997E12, 236.0], [1.64607995E12, 240.0], [1.64607993E12, 238.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.646079965E12, 304.0], [1.646079945E12, 264.0], [1.646079925E12, 347.5], [1.646079915E12, 487.0], [1.64607996E12, 290.5], [1.64607994E12, 262.5], [1.64607992E12, 317.0], [1.646079975E12, 702.0], [1.646079955E12, 253.5], [1.646079935E12, 252.5], [1.64607997E12, 295.0], [1.64607995E12, 254.0], [1.64607993E12, 266.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.646079975E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 270.0, "minX": 1.0, "maxY": 795.5, "series": [{"data": [[1.0, 270.0], [4.0, 795.5], [2.0, 274.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 269.5, "minX": 1.0, "maxY": 795.0, "series": [{"data": [[1.0, 269.5], [4.0, 795.0], [2.0, 274.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6, "minX": 1.646079915E12, "maxY": 1.8, "series": [{"data": [[1.646079965E12, 1.6], [1.646079955E12, 1.6], [1.646079945E12, 1.6], [1.646079935E12, 1.6], [1.646079925E12, 1.6], [1.646079915E12, 1.8], [1.64607997E12, 1.8], [1.64607996E12, 1.8], [1.64607995E12, 1.6], [1.64607994E12, 1.8], [1.64607993E12, 1.6], [1.64607992E12, 1.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.64607997E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.2, "minX": 1.646079915E12, "maxY": 1.8, "series": [{"data": [[1.646079965E12, 1.6], [1.646079945E12, 1.8], [1.646079925E12, 1.6], [1.646079915E12, 1.6], [1.64607996E12, 1.6], [1.64607994E12, 1.6], [1.64607992E12, 1.8], [1.646079975E12, 0.2], [1.646079955E12, 1.6], [1.646079935E12, 1.6], [1.64607997E12, 1.8], [1.64607995E12, 1.6], [1.64607993E12, 1.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 5000, "maxX": 1.646079975E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.2, "minX": 1.646079915E12, "maxY": 1.8, "series": [{"data": [[1.646079965E12, 1.6], [1.646079945E12, 1.8], [1.646079925E12, 1.6], [1.646079915E12, 1.6], [1.64607996E12, 1.6], [1.64607994E12, 1.6], [1.64607992E12, 1.8], [1.646079975E12, 0.2], [1.646079955E12, 1.6], [1.646079935E12, 1.6], [1.64607997E12, 1.8], [1.64607995E12, 1.6], [1.64607993E12, 1.6]], "isOverall": false, "label": "weather-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.646079975E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.2, "minX": 1.646079915E12, "maxY": 1.8, "series": [{"data": [[1.646079965E12, 1.6], [1.646079945E12, 1.8], [1.646079925E12, 1.6], [1.646079915E12, 1.6], [1.64607996E12, 1.6], [1.64607994E12, 1.6], [1.64607992E12, 1.8], [1.646079975E12, 0.2], [1.646079955E12, 1.6], [1.646079935E12, 1.6], [1.64607997E12, 1.8], [1.64607995E12, 1.6], [1.64607993E12, 1.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 5000, "maxX": 1.646079975E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

