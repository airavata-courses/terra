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
        data: {"result": {"minY": 277.0, "minX": 0.0, "maxY": 5388.0, "series": [{"data": [[0.0, 277.0], [0.1, 277.0], [0.2, 278.0], [0.3, 278.0], [0.4, 282.0], [0.5, 284.0], [0.6, 286.0], [0.7, 287.0], [0.8, 287.0], [0.9, 287.0], [1.0, 288.0], [1.1, 289.0], [1.2, 289.0], [1.3, 290.0], [1.4, 290.0], [1.5, 292.0], [1.6, 294.0], [1.7, 300.0], [1.8, 301.0], [1.9, 301.0], [2.0, 303.0], [2.1, 303.0], [2.2, 305.0], [2.3, 305.0], [2.4, 306.0], [2.5, 306.0], [2.6, 307.0], [2.7, 308.0], [2.8, 308.0], [2.9, 310.0], [3.0, 312.0], [3.1, 314.0], [3.2, 314.0], [3.3, 315.0], [3.4, 315.0], [3.5, 316.0], [3.6, 319.0], [3.7, 319.0], [3.8, 320.0], [3.9, 322.0], [4.0, 324.0], [4.1, 324.0], [4.2, 326.0], [4.3, 328.0], [4.4, 329.0], [4.5, 330.0], [4.6, 331.0], [4.7, 333.0], [4.8, 333.0], [4.9, 333.0], [5.0, 333.0], [5.1, 333.0], [5.2, 335.0], [5.3, 335.0], [5.4, 336.0], [5.5, 336.0], [5.6, 336.0], [5.7, 338.0], [5.8, 338.0], [5.9, 338.0], [6.0, 339.0], [6.1, 339.0], [6.2, 339.0], [6.3, 340.0], [6.4, 341.0], [6.5, 342.0], [6.6, 342.0], [6.7, 342.0], [6.8, 343.0], [6.9, 344.0], [7.0, 344.0], [7.1, 345.0], [7.2, 345.0], [7.3, 346.0], [7.4, 346.0], [7.5, 347.0], [7.6, 354.0], [7.7, 354.0], [7.8, 354.0], [7.9, 354.0], [8.0, 354.0], [8.1, 356.0], [8.2, 356.0], [8.3, 357.0], [8.4, 357.0], [8.5, 357.0], [8.6, 358.0], [8.7, 359.0], [8.8, 359.0], [8.9, 359.0], [9.0, 360.0], [9.1, 360.0], [9.2, 361.0], [9.3, 362.0], [9.4, 362.0], [9.5, 363.0], [9.6, 363.0], [9.7, 363.0], [9.8, 365.0], [9.9, 366.0], [10.0, 366.0], [10.1, 366.0], [10.2, 367.0], [10.3, 368.0], [10.4, 369.0], [10.5, 369.0], [10.6, 369.0], [10.7, 370.0], [10.8, 370.0], [10.9, 370.0], [11.0, 370.0], [11.1, 373.0], [11.2, 374.0], [11.3, 375.0], [11.4, 375.0], [11.5, 375.0], [11.6, 375.0], [11.7, 375.0], [11.8, 376.0], [11.9, 376.0], [12.0, 378.0], [12.1, 378.0], [12.2, 379.0], [12.3, 380.0], [12.4, 380.0], [12.5, 381.0], [12.6, 382.0], [12.7, 383.0], [12.8, 383.0], [12.9, 383.0], [13.0, 384.0], [13.1, 384.0], [13.2, 384.0], [13.3, 384.0], [13.4, 385.0], [13.5, 386.0], [13.6, 386.0], [13.7, 386.0], [13.8, 386.0], [13.9, 387.0], [14.0, 387.0], [14.1, 388.0], [14.2, 388.0], [14.3, 388.0], [14.4, 389.0], [14.5, 389.0], [14.6, 389.0], [14.7, 390.0], [14.8, 390.0], [14.9, 390.0], [15.0, 390.0], [15.1, 390.0], [15.2, 393.0], [15.3, 394.0], [15.4, 394.0], [15.5, 395.0], [15.6, 395.0], [15.7, 396.0], [15.8, 396.0], [15.9, 397.0], [16.0, 398.0], [16.1, 400.0], [16.2, 400.0], [16.3, 400.0], [16.4, 400.0], [16.5, 400.0], [16.6, 401.0], [16.7, 401.0], [16.8, 401.0], [16.9, 401.0], [17.0, 401.0], [17.1, 401.0], [17.2, 402.0], [17.3, 402.0], [17.4, 402.0], [17.5, 402.0], [17.6, 402.0], [17.7, 402.0], [17.8, 403.0], [17.9, 403.0], [18.0, 403.0], [18.1, 403.0], [18.2, 403.0], [18.3, 403.0], [18.4, 403.0], [18.5, 404.0], [18.6, 404.0], [18.7, 405.0], [18.8, 405.0], [18.9, 405.0], [19.0, 405.0], [19.1, 405.0], [19.2, 406.0], [19.3, 406.0], [19.4, 406.0], [19.5, 407.0], [19.6, 407.0], [19.7, 407.0], [19.8, 407.0], [19.9, 407.0], [20.0, 408.0], [20.1, 409.0], [20.2, 409.0], [20.3, 410.0], [20.4, 410.0], [20.5, 410.0], [20.6, 411.0], [20.7, 411.0], [20.8, 412.0], [20.9, 412.0], [21.0, 412.0], [21.1, 412.0], [21.2, 413.0], [21.3, 413.0], [21.4, 414.0], [21.5, 414.0], [21.6, 415.0], [21.7, 415.0], [21.8, 415.0], [21.9, 416.0], [22.0, 416.0], [22.1, 416.0], [22.2, 416.0], [22.3, 418.0], [22.4, 418.0], [22.5, 418.0], [22.6, 418.0], [22.7, 419.0], [22.8, 420.0], [22.9, 421.0], [23.0, 422.0], [23.1, 423.0], [23.2, 423.0], [23.3, 424.0], [23.4, 424.0], [23.5, 425.0], [23.6, 425.0], [23.7, 426.0], [23.8, 426.0], [23.9, 426.0], [24.0, 427.0], [24.1, 428.0], [24.2, 428.0], [24.3, 429.0], [24.4, 429.0], [24.5, 430.0], [24.6, 430.0], [24.7, 430.0], [24.8, 431.0], [24.9, 431.0], [25.0, 432.0], [25.1, 433.0], [25.2, 433.0], [25.3, 434.0], [25.4, 434.0], [25.5, 435.0], [25.6, 435.0], [25.7, 435.0], [25.8, 435.0], [25.9, 435.0], [26.0, 435.0], [26.1, 435.0], [26.2, 436.0], [26.3, 437.0], [26.4, 437.0], [26.5, 437.0], [26.6, 437.0], [26.7, 438.0], [26.8, 438.0], [26.9, 438.0], [27.0, 438.0], [27.1, 438.0], [27.2, 440.0], [27.3, 441.0], [27.4, 441.0], [27.5, 441.0], [27.6, 442.0], [27.7, 443.0], [27.8, 443.0], [27.9, 444.0], [28.0, 444.0], [28.1, 445.0], [28.2, 445.0], [28.3, 446.0], [28.4, 446.0], [28.5, 446.0], [28.6, 447.0], [28.7, 447.0], [28.8, 447.0], [28.9, 447.0], [29.0, 448.0], [29.1, 448.0], [29.2, 449.0], [29.3, 449.0], [29.4, 450.0], [29.5, 450.0], [29.6, 450.0], [29.7, 451.0], [29.8, 451.0], [29.9, 451.0], [30.0, 451.0], [30.1, 452.0], [30.2, 452.0], [30.3, 452.0], [30.4, 452.0], [30.5, 452.0], [30.6, 452.0], [30.7, 453.0], [30.8, 453.0], [30.9, 453.0], [31.0, 453.0], [31.1, 454.0], [31.2, 454.0], [31.3, 454.0], [31.4, 454.0], [31.5, 455.0], [31.6, 455.0], [31.7, 455.0], [31.8, 456.0], [31.9, 456.0], [32.0, 456.0], [32.1, 457.0], [32.2, 457.0], [32.3, 457.0], [32.4, 459.0], [32.5, 459.0], [32.6, 461.0], [32.7, 461.0], [32.8, 462.0], [32.9, 462.0], [33.0, 462.0], [33.1, 462.0], [33.2, 462.0], [33.3, 463.0], [33.4, 463.0], [33.5, 463.0], [33.6, 464.0], [33.7, 464.0], [33.8, 465.0], [33.9, 465.0], [34.0, 465.0], [34.1, 466.0], [34.2, 466.0], [34.3, 466.0], [34.4, 466.0], [34.5, 466.0], [34.6, 466.0], [34.7, 467.0], [34.8, 467.0], [34.9, 467.0], [35.0, 467.0], [35.1, 467.0], [35.2, 468.0], [35.3, 468.0], [35.4, 468.0], [35.5, 469.0], [35.6, 469.0], [35.7, 470.0], [35.8, 470.0], [35.9, 471.0], [36.0, 472.0], [36.1, 472.0], [36.2, 473.0], [36.3, 473.0], [36.4, 473.0], [36.5, 473.0], [36.6, 474.0], [36.7, 474.0], [36.8, 474.0], [36.9, 474.0], [37.0, 475.0], [37.1, 475.0], [37.2, 476.0], [37.3, 476.0], [37.4, 476.0], [37.5, 477.0], [37.6, 477.0], [37.7, 477.0], [37.8, 477.0], [37.9, 477.0], [38.0, 478.0], [38.1, 478.0], [38.2, 478.0], [38.3, 478.0], [38.4, 479.0], [38.5, 479.0], [38.6, 479.0], [38.7, 479.0], [38.8, 480.0], [38.9, 480.0], [39.0, 481.0], [39.1, 481.0], [39.2, 481.0], [39.3, 482.0], [39.4, 482.0], [39.5, 483.0], [39.6, 483.0], [39.7, 483.0], [39.8, 484.0], [39.9, 485.0], [40.0, 485.0], [40.1, 485.0], [40.2, 485.0], [40.3, 486.0], [40.4, 486.0], [40.5, 488.0], [40.6, 488.0], [40.7, 489.0], [40.8, 489.0], [40.9, 489.0], [41.0, 489.0], [41.1, 490.0], [41.2, 490.0], [41.3, 490.0], [41.4, 491.0], [41.5, 492.0], [41.6, 492.0], [41.7, 493.0], [41.8, 494.0], [41.9, 494.0], [42.0, 495.0], [42.1, 495.0], [42.2, 495.0], [42.3, 496.0], [42.4, 496.0], [42.5, 497.0], [42.6, 499.0], [42.7, 499.0], [42.8, 499.0], [42.9, 499.0], [43.0, 500.0], [43.1, 501.0], [43.2, 501.0], [43.3, 501.0], [43.4, 501.0], [43.5, 501.0], [43.6, 502.0], [43.7, 502.0], [43.8, 502.0], [43.9, 502.0], [44.0, 502.0], [44.1, 503.0], [44.2, 504.0], [44.3, 504.0], [44.4, 504.0], [44.5, 505.0], [44.6, 506.0], [44.7, 507.0], [44.8, 507.0], [44.9, 507.0], [45.0, 508.0], [45.1, 508.0], [45.2, 508.0], [45.3, 510.0], [45.4, 512.0], [45.5, 512.0], [45.6, 512.0], [45.7, 513.0], [45.8, 514.0], [45.9, 514.0], [46.0, 514.0], [46.1, 516.0], [46.2, 516.0], [46.3, 516.0], [46.4, 516.0], [46.5, 517.0], [46.6, 518.0], [46.7, 518.0], [46.8, 518.0], [46.9, 518.0], [47.0, 520.0], [47.1, 520.0], [47.2, 521.0], [47.3, 521.0], [47.4, 521.0], [47.5, 521.0], [47.6, 523.0], [47.7, 523.0], [47.8, 523.0], [47.9, 524.0], [48.0, 524.0], [48.1, 525.0], [48.2, 525.0], [48.3, 525.0], [48.4, 525.0], [48.5, 526.0], [48.6, 526.0], [48.7, 527.0], [48.8, 528.0], [48.9, 530.0], [49.0, 530.0], [49.1, 530.0], [49.2, 530.0], [49.3, 530.0], [49.4, 530.0], [49.5, 531.0], [49.6, 531.0], [49.7, 532.0], [49.8, 532.0], [49.9, 532.0], [50.0, 533.0], [50.1, 533.0], [50.2, 534.0], [50.3, 534.0], [50.4, 534.0], [50.5, 535.0], [50.6, 536.0], [50.7, 536.0], [50.8, 536.0], [50.9, 536.0], [51.0, 536.0], [51.1, 536.0], [51.2, 537.0], [51.3, 538.0], [51.4, 538.0], [51.5, 538.0], [51.6, 538.0], [51.7, 538.0], [51.8, 538.0], [51.9, 539.0], [52.0, 540.0], [52.1, 541.0], [52.2, 541.0], [52.3, 542.0], [52.4, 542.0], [52.5, 542.0], [52.6, 542.0], [52.7, 542.0], [52.8, 542.0], [52.9, 542.0], [53.0, 543.0], [53.1, 543.0], [53.2, 543.0], [53.3, 543.0], [53.4, 544.0], [53.5, 545.0], [53.6, 546.0], [53.7, 546.0], [53.8, 547.0], [53.9, 548.0], [54.0, 549.0], [54.1, 550.0], [54.2, 550.0], [54.3, 551.0], [54.4, 551.0], [54.5, 551.0], [54.6, 551.0], [54.7, 551.0], [54.8, 552.0], [54.9, 552.0], [55.0, 552.0], [55.1, 553.0], [55.2, 553.0], [55.3, 554.0], [55.4, 554.0], [55.5, 554.0], [55.6, 554.0], [55.7, 555.0], [55.8, 555.0], [55.9, 555.0], [56.0, 556.0], [56.1, 557.0], [56.2, 557.0], [56.3, 558.0], [56.4, 558.0], [56.5, 558.0], [56.6, 559.0], [56.7, 559.0], [56.8, 560.0], [56.9, 560.0], [57.0, 560.0], [57.1, 561.0], [57.2, 561.0], [57.3, 561.0], [57.4, 562.0], [57.5, 563.0], [57.6, 564.0], [57.7, 564.0], [57.8, 564.0], [57.9, 564.0], [58.0, 565.0], [58.1, 565.0], [58.2, 566.0], [58.3, 567.0], [58.4, 567.0], [58.5, 567.0], [58.6, 567.0], [58.7, 567.0], [58.8, 567.0], [58.9, 568.0], [59.0, 568.0], [59.1, 568.0], [59.2, 569.0], [59.3, 569.0], [59.4, 569.0], [59.5, 571.0], [59.6, 573.0], [59.7, 573.0], [59.8, 573.0], [59.9, 575.0], [60.0, 575.0], [60.1, 575.0], [60.2, 576.0], [60.3, 576.0], [60.4, 577.0], [60.5, 578.0], [60.6, 579.0], [60.7, 579.0], [60.8, 579.0], [60.9, 580.0], [61.0, 580.0], [61.1, 581.0], [61.2, 581.0], [61.3, 581.0], [61.4, 582.0], [61.5, 582.0], [61.6, 583.0], [61.7, 583.0], [61.8, 583.0], [61.9, 585.0], [62.0, 585.0], [62.1, 586.0], [62.2, 587.0], [62.3, 587.0], [62.4, 587.0], [62.5, 587.0], [62.6, 588.0], [62.7, 588.0], [62.8, 589.0], [62.9, 589.0], [63.0, 589.0], [63.1, 589.0], [63.2, 590.0], [63.3, 590.0], [63.4, 590.0], [63.5, 590.0], [63.6, 591.0], [63.7, 591.0], [63.8, 592.0], [63.9, 594.0], [64.0, 595.0], [64.1, 597.0], [64.2, 597.0], [64.3, 598.0], [64.4, 598.0], [64.5, 600.0], [64.6, 601.0], [64.7, 601.0], [64.8, 601.0], [64.9, 602.0], [65.0, 603.0], [65.1, 604.0], [65.2, 606.0], [65.3, 606.0], [65.4, 606.0], [65.5, 606.0], [65.6, 607.0], [65.7, 608.0], [65.8, 610.0], [65.9, 610.0], [66.0, 610.0], [66.1, 610.0], [66.2, 611.0], [66.3, 611.0], [66.4, 612.0], [66.5, 612.0], [66.6, 612.0], [66.7, 612.0], [66.8, 614.0], [66.9, 614.0], [67.0, 616.0], [67.1, 616.0], [67.2, 617.0], [67.3, 618.0], [67.4, 621.0], [67.5, 621.0], [67.6, 621.0], [67.7, 622.0], [67.8, 622.0], [67.9, 622.0], [68.0, 623.0], [68.1, 623.0], [68.2, 624.0], [68.3, 625.0], [68.4, 625.0], [68.5, 625.0], [68.6, 626.0], [68.7, 626.0], [68.8, 627.0], [68.9, 627.0], [69.0, 628.0], [69.1, 628.0], [69.2, 628.0], [69.3, 629.0], [69.4, 629.0], [69.5, 629.0], [69.6, 631.0], [69.7, 633.0], [69.8, 633.0], [69.9, 634.0], [70.0, 634.0], [70.1, 635.0], [70.2, 637.0], [70.3, 638.0], [70.4, 639.0], [70.5, 639.0], [70.6, 639.0], [70.7, 640.0], [70.8, 641.0], [70.9, 642.0], [71.0, 645.0], [71.1, 645.0], [71.2, 647.0], [71.3, 647.0], [71.4, 651.0], [71.5, 652.0], [71.6, 652.0], [71.7, 653.0], [71.8, 653.0], [71.9, 654.0], [72.0, 656.0], [72.1, 657.0], [72.2, 657.0], [72.3, 658.0], [72.4, 659.0], [72.5, 660.0], [72.6, 661.0], [72.7, 661.0], [72.8, 661.0], [72.9, 662.0], [73.0, 662.0], [73.1, 662.0], [73.2, 663.0], [73.3, 663.0], [73.4, 664.0], [73.5, 667.0], [73.6, 668.0], [73.7, 671.0], [73.8, 672.0], [73.9, 672.0], [74.0, 673.0], [74.1, 673.0], [74.2, 674.0], [74.3, 674.0], [74.4, 675.0], [74.5, 676.0], [74.6, 677.0], [74.7, 680.0], [74.8, 680.0], [74.9, 684.0], [75.0, 684.0], [75.1, 685.0], [75.2, 687.0], [75.3, 688.0], [75.4, 688.0], [75.5, 690.0], [75.6, 692.0], [75.7, 696.0], [75.8, 700.0], [75.9, 703.0], [76.0, 705.0], [76.1, 707.0], [76.2, 708.0], [76.3, 710.0], [76.4, 711.0], [76.5, 715.0], [76.6, 715.0], [76.7, 715.0], [76.8, 715.0], [76.9, 716.0], [77.0, 717.0], [77.1, 718.0], [77.2, 719.0], [77.3, 719.0], [77.4, 721.0], [77.5, 723.0], [77.6, 723.0], [77.7, 723.0], [77.8, 724.0], [77.9, 724.0], [78.0, 725.0], [78.1, 727.0], [78.2, 727.0], [78.3, 728.0], [78.4, 729.0], [78.5, 731.0], [78.6, 731.0], [78.7, 735.0], [78.8, 739.0], [78.9, 741.0], [79.0, 743.0], [79.1, 747.0], [79.2, 749.0], [79.3, 750.0], [79.4, 751.0], [79.5, 751.0], [79.6, 752.0], [79.7, 758.0], [79.8, 758.0], [79.9, 760.0], [80.0, 761.0], [80.1, 764.0], [80.2, 767.0], [80.3, 768.0], [80.4, 770.0], [80.5, 772.0], [80.6, 775.0], [80.7, 775.0], [80.8, 778.0], [80.9, 781.0], [81.0, 782.0], [81.1, 790.0], [81.2, 791.0], [81.3, 792.0], [81.4, 792.0], [81.5, 793.0], [81.6, 793.0], [81.7, 794.0], [81.8, 796.0], [81.9, 796.0], [82.0, 796.0], [82.1, 796.0], [82.2, 797.0], [82.3, 798.0], [82.4, 798.0], [82.5, 798.0], [82.6, 800.0], [82.7, 801.0], [82.8, 801.0], [82.9, 802.0], [83.0, 803.0], [83.1, 804.0], [83.2, 804.0], [83.3, 805.0], [83.4, 805.0], [83.5, 806.0], [83.6, 806.0], [83.7, 808.0], [83.8, 811.0], [83.9, 815.0], [84.0, 816.0], [84.1, 819.0], [84.2, 821.0], [84.3, 826.0], [84.4, 828.0], [84.5, 829.0], [84.6, 847.0], [84.7, 849.0], [84.8, 850.0], [84.9, 850.0], [85.0, 851.0], [85.1, 852.0], [85.2, 853.0], [85.3, 854.0], [85.4, 856.0], [85.5, 860.0], [85.6, 862.0], [85.7, 862.0], [85.8, 862.0], [85.9, 865.0], [86.0, 870.0], [86.1, 871.0], [86.2, 874.0], [86.3, 877.0], [86.4, 877.0], [86.5, 885.0], [86.6, 888.0], [86.7, 893.0], [86.8, 895.0], [86.9, 896.0], [87.0, 906.0], [87.1, 912.0], [87.2, 913.0], [87.3, 919.0], [87.4, 923.0], [87.5, 924.0], [87.6, 926.0], [87.7, 929.0], [87.8, 932.0], [87.9, 932.0], [88.0, 933.0], [88.1, 935.0], [88.2, 939.0], [88.3, 941.0], [88.4, 944.0], [88.5, 945.0], [88.6, 949.0], [88.7, 952.0], [88.8, 952.0], [88.9, 952.0], [89.0, 954.0], [89.1, 956.0], [89.2, 956.0], [89.3, 963.0], [89.4, 966.0], [89.5, 970.0], [89.6, 975.0], [89.7, 977.0], [89.8, 978.0], [89.9, 979.0], [90.0, 985.0], [90.1, 988.0], [90.2, 989.0], [90.3, 990.0], [90.4, 997.0], [90.5, 1000.0], [90.6, 1000.0], [90.7, 1005.0], [90.8, 1008.0], [90.9, 1013.0], [91.0, 1021.0], [91.1, 1024.0], [91.2, 1025.0], [91.3, 1027.0], [91.4, 1037.0], [91.5, 1043.0], [91.6, 1047.0], [91.7, 1052.0], [91.8, 1065.0], [91.9, 1066.0], [92.0, 1068.0], [92.1, 1071.0], [92.2, 1075.0], [92.3, 1076.0], [92.4, 1083.0], [92.5, 1084.0], [92.6, 1088.0], [92.7, 1100.0], [92.8, 1101.0], [92.9, 1101.0], [93.0, 1105.0], [93.1, 1110.0], [93.2, 1124.0], [93.3, 1133.0], [93.4, 1137.0], [93.5, 1139.0], [93.6, 1146.0], [93.7, 1153.0], [93.8, 1170.0], [93.9, 1180.0], [94.0, 1184.0], [94.1, 1192.0], [94.2, 1203.0], [94.3, 1205.0], [94.4, 1227.0], [94.5, 1232.0], [94.6, 1235.0], [94.7, 1261.0], [94.8, 1278.0], [94.9, 1280.0], [95.0, 1281.0], [95.1, 1294.0], [95.2, 1306.0], [95.3, 1331.0], [95.4, 1333.0], [95.5, 1334.0], [95.6, 1335.0], [95.7, 1350.0], [95.8, 1351.0], [95.9, 1357.0], [96.0, 1391.0], [96.1, 1403.0], [96.2, 1413.0], [96.3, 1416.0], [96.4, 1420.0], [96.5, 1426.0], [96.6, 1446.0], [96.7, 1491.0], [96.8, 1499.0], [96.9, 1504.0], [97.0, 1531.0], [97.1, 1550.0], [97.2, 1552.0], [97.3, 1561.0], [97.4, 1573.0], [97.5, 1606.0], [97.6, 1610.0], [97.7, 1686.0], [97.8, 1712.0], [97.9, 1763.0], [98.0, 1789.0], [98.1, 1790.0], [98.2, 1829.0], [98.3, 1854.0], [98.4, 1854.0], [98.5, 1897.0], [98.6, 1939.0], [98.7, 1943.0], [98.8, 1968.0], [98.9, 2088.0], [99.0, 2135.0], [99.1, 2436.0], [99.2, 2506.0], [99.3, 2607.0], [99.4, 2623.0], [99.5, 3443.0], [99.6, 3842.0], [99.7, 4001.0], [99.8, 5098.0], [99.9, 5388.0]], "isOverall": false, "label": "Plot and download", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 268.0, "series": [{"data": [[600.0, 114.0], [700.0, 68.0], [800.0, 44.0], [900.0, 35.0], [1000.0, 22.0], [1100.0, 15.0], [1200.0, 10.0], [1300.0, 9.0], [1400.0, 8.0], [1500.0, 6.0], [1600.0, 3.0], [1700.0, 4.0], [1800.0, 4.0], [1900.0, 3.0], [2000.0, 1.0], [2100.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [200.0, 16.0], [3400.0, 1.0], [3800.0, 1.0], [4000.0, 1.0], [300.0, 145.0], [5000.0, 1.0], [5300.0, 1.0], [400.0, 268.0], [500.0, 215.0]], "isOverall": false, "label": "Plot and download", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 31.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 539.0, "series": [{"data": [[0.0, 430.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 539.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 31.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.4999999999999996, "minX": 1.64618643E12, "maxY": 3.0, "series": [{"data": [[1.64618659E12, 2.68], [1.64618672E12, 2.3199999999999994], [1.64618646E12, 1.7499999999999998], [1.64618663E12, 1.9166666666666665], [1.64618676E12, 2.2692307692307696], [1.6461865E12, 1.8749999999999998], [1.64618667E12, 2.333333333333333], [1.6461868E12, 2.423076923076923], [1.64618654E12, 1.7916666666666663], [1.64618671E12, 2.230769230769231], [1.64618673E12, 2.153846153846154], [1.64618643E12, 3.0], [1.64618656E12, 2.3076923076923084], [1.64618677E12, 2.0769230769230766], [1.64618647E12, 1.5599999999999998], [1.6461866E12, 2.6956521739130435], [1.64618681E12, 2.083333333333333], [1.64618651E12, 2.4399999999999995], [1.64618664E12, 2.423076923076923], [1.64618655E12, 1.8399999999999994], [1.64618668E12, 2.36], [1.64618657E12, 2.3478260869565224], [1.64618674E12, 2.2799999999999994], [1.64618644E12, 2.2592592592592595], [1.64618661E12, 2.7307692307692304], [1.64618678E12, 2.041666666666666], [1.64618648E12, 1.4999999999999996], [1.64618665E12, 2.3750000000000004], [1.64618682E12, 2.1923076923076925], [1.64618652E12, 1.9166666666666667], [1.64618669E12, 2.6], [1.64618658E12, 2.192307692307693], [1.64618675E12, 2.791666666666667], [1.64618662E12, 2.3200000000000007], [1.64618679E12, 2.192307692307692], [1.64618645E12, 1.5999999999999999], [1.64618666E12, 2.3333333333333335], [1.64618683E12, 2.0833333333333335], [1.64618649E12, 1.5384615384615385], [1.6461867E12, 2.541666666666667], [1.64618653E12, 1.7999999999999998]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.64618683E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 354.6356589147286, "minX": 1.0, "maxY": 1025.3333333333333, "series": [{"data": [[4.0, 1025.3333333333333], [2.0, 595.9686468646868], [1.0, 354.6356589147286], [5.0, 992.8333333333334], [3.0, 831.6238938053095]], "isOverall": false, "label": "Plot and download", "isController": false}, {"data": [[2.180999999999999, 634.645]], "isOverall": false, "label": "Plot and download-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 16.9, "minX": 1.64618643E12, "maxY": 1036.8, "series": [{"data": [[1.64618659E12, 960.0], [1.64618672E12, 960.0], [1.64618646E12, 921.6], [1.64618663E12, 921.6], [1.64618676E12, 998.4], [1.6461865E12, 921.6], [1.64618667E12, 921.6], [1.6461868E12, 998.4], [1.64618654E12, 921.6], [1.64618671E12, 998.4], [1.64618673E12, 998.4], [1.64618643E12, 38.4], [1.64618656E12, 998.4], [1.64618677E12, 998.4], [1.64618647E12, 960.0], [1.6461866E12, 883.2], [1.64618681E12, 921.6], [1.64618651E12, 960.0], [1.64618664E12, 998.4], [1.64618655E12, 960.0], [1.64618668E12, 960.0], [1.64618657E12, 883.2], [1.64618674E12, 960.0], [1.64618644E12, 1036.8], [1.64618661E12, 998.4], [1.64618678E12, 921.6], [1.64618648E12, 921.6], [1.64618665E12, 921.6], [1.64618682E12, 998.4], [1.64618652E12, 921.6], [1.64618669E12, 960.0], [1.64618658E12, 998.4], [1.64618675E12, 921.6], [1.64618662E12, 960.0], [1.64618679E12, 998.4], [1.64618645E12, 960.0], [1.64618666E12, 1036.8], [1.64618683E12, 921.6], [1.64618649E12, 998.4], [1.6461867E12, 921.6], [1.64618653E12, 960.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64618659E12, 422.5], [1.64618672E12, 422.5], [1.64618646E12, 405.6], [1.64618663E12, 405.6], [1.64618676E12, 439.4], [1.6461865E12, 405.6], [1.64618667E12, 405.6], [1.6461868E12, 439.4], [1.64618654E12, 405.6], [1.64618671E12, 439.4], [1.64618673E12, 439.4], [1.64618643E12, 16.9], [1.64618656E12, 439.4], [1.64618677E12, 439.4], [1.64618647E12, 422.5], [1.6461866E12, 388.7], [1.64618681E12, 405.6], [1.64618651E12, 422.5], [1.64618664E12, 439.4], [1.64618655E12, 422.5], [1.64618668E12, 422.5], [1.64618657E12, 388.7], [1.64618674E12, 422.5], [1.64618644E12, 456.3], [1.64618661E12, 439.4], [1.64618678E12, 405.6], [1.64618648E12, 405.6], [1.64618665E12, 405.6], [1.64618682E12, 439.4], [1.64618652E12, 405.6], [1.64618669E12, 422.5], [1.64618658E12, 439.4], [1.64618675E12, 405.6], [1.64618662E12, 422.5], [1.64618679E12, 439.4], [1.64618645E12, 422.5], [1.64618666E12, 456.3], [1.64618683E12, 405.6], [1.64618649E12, 439.4], [1.6461867E12, 405.6], [1.64618653E12, 422.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.64618683E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 418.0416666666666, "minX": 1.64618643E12, "maxY": 999.6538461538461, "series": [{"data": [[1.64618659E12, 777.0400000000002], [1.64618672E12, 705.3999999999999], [1.64618646E12, 504.66666666666663], [1.64618663E12, 530.9583333333333], [1.64618676E12, 687.9999999999999], [1.6461865E12, 532.7083333333334], [1.64618667E12, 687.7499999999999], [1.6461868E12, 728.6538461538461], [1.64618654E12, 517.5416666666666], [1.64618671E12, 683.3461538461542], [1.64618673E12, 621.7307692307692], [1.64618643E12, 985.0], [1.64618656E12, 678.423076923077], [1.64618677E12, 582.8461538461537], [1.64618647E12, 456.72], [1.6461866E12, 667.0], [1.64618681E12, 576.25], [1.64618651E12, 732.0000000000001], [1.64618664E12, 652.1923076923076], [1.64618655E12, 498.72], [1.64618668E12, 687.1999999999998], [1.64618657E12, 664.5652173913043], [1.64618674E12, 631.92], [1.64618644E12, 726.962962962963], [1.64618661E12, 999.6538461538461], [1.64618678E12, 574.0833333333334], [1.64618648E12, 418.0416666666666], [1.64618665E12, 697.2500000000001], [1.64618682E12, 636.1923076923077], [1.64618652E12, 514.0833333333334], [1.64618669E12, 750.68], [1.64618658E12, 629.7692307692308], [1.64618675E12, 903.125], [1.64618662E12, 663.4799999999999], [1.64618679E12, 582.1153846153846], [1.64618645E12, 468.68], [1.64618666E12, 695.2962962962963], [1.64618683E12, 592.7916666666667], [1.64618649E12, 456.5], [1.6461867E12, 746.7916666666665], [1.64618653E12, 472.28000000000003]], "isOverall": false, "label": "Plot and download", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.64618683E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 417.95833333333326, "minX": 1.64618643E12, "maxY": 999.5384615384617, "series": [{"data": [[1.64618659E12, 776.8799999999998], [1.64618672E12, 705.3999999999999], [1.64618646E12, 504.58333333333326], [1.64618663E12, 530.8750000000001], [1.64618676E12, 687.9615384615386], [1.6461865E12, 532.5833333333334], [1.64618667E12, 687.7499999999999], [1.6461868E12, 728.6538461538461], [1.64618654E12, 517.4166666666666], [1.64618671E12, 683.2692307692308], [1.64618673E12, 621.6923076923077], [1.64618643E12, 985.0], [1.64618656E12, 678.2307692307692], [1.64618677E12, 582.8076923076923], [1.64618647E12, 456.68000000000006], [1.6461866E12, 667.0], [1.64618681E12, 576.25], [1.64618651E12, 731.8800000000001], [1.64618664E12, 651.8846153846154], [1.64618655E12, 498.6], [1.64618668E12, 687.16], [1.64618657E12, 664.4347826086956], [1.64618674E12, 631.7200000000001], [1.64618644E12, 726.814814814815], [1.64618661E12, 999.5384615384617], [1.64618678E12, 573.9166666666666], [1.64618648E12, 417.95833333333326], [1.64618665E12, 697.2500000000001], [1.64618682E12, 636.1538461538461], [1.64618652E12, 514.0833333333334], [1.64618669E12, 750.5999999999999], [1.64618658E12, 629.7307692307694], [1.64618675E12, 903.0833333333334], [1.64618662E12, 663.4000000000001], [1.64618679E12, 582.0384615384614], [1.64618645E12, 468.44], [1.64618666E12, 695.2592592592594], [1.64618683E12, 592.7083333333334], [1.64618649E12, 456.5], [1.6461867E12, 746.7916666666665], [1.64618653E12, 472.28000000000003]], "isOverall": false, "label": "Plot and download", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.64618683E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8749999999999999, "minX": 1.64618643E12, "maxY": 20.0, "series": [{"data": [[1.64618659E12, 1.5199999999999998], [1.64618672E12, 0.9199999999999998], [1.64618646E12, 1.2916666666666672], [1.64618663E12, 1.0], [1.64618676E12, 1.2692307692307698], [1.6461865E12, 0.9583333333333334], [1.64618667E12, 1.291666666666667], [1.6461868E12, 0.923076923076923], [1.64618654E12, 1.4583333333333333], [1.64618671E12, 1.2692307692307692], [1.64618673E12, 1.0769230769230769], [1.64618643E12, 20.0], [1.64618656E12, 1.1923076923076925], [1.64618677E12, 0.923076923076923], [1.64618647E12, 1.4000000000000001], [1.6461866E12, 1.1304347826086962], [1.64618681E12, 1.0833333333333335], [1.64618651E12, 0.96], [1.64618664E12, 1.7692307692307692], [1.64618655E12, 1.0800000000000003], [1.64618668E12, 1.44], [1.64618657E12, 1.2608695652173916], [1.64618674E12, 2.2], [1.64618644E12, 1.1111111111111116], [1.64618661E12, 1.4230769230769234], [1.64618678E12, 2.5000000000000004], [1.64618648E12, 0.9999999999999998], [1.64618665E12, 1.2083333333333337], [1.64618682E12, 1.1153846153846154], [1.64618652E12, 1.1250000000000002], [1.64618669E12, 1.4800000000000002], [1.64618658E12, 1.1153846153846156], [1.64618675E12, 1.2500000000000002], [1.64618662E12, 1.4800000000000004], [1.64618679E12, 1.3461538461538465], [1.64618645E12, 1.2800000000000002], [1.64618666E12, 1.1851851851851856], [1.64618683E12, 0.8749999999999999], [1.64618649E12, 1.0000000000000002], [1.6461867E12, 1.0833333333333333], [1.64618653E12, 0.96]], "isOverall": false, "label": "Plot and download", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.64618683E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 277.0, "minX": 1.64618643E12, "maxY": 5388.0, "series": [{"data": [[1.64618659E12, 5388.0], [1.64618672E12, 2506.0], [1.64618646E12, 1261.0], [1.64618663E12, 856.0], [1.64618676E12, 2135.0], [1.6461865E12, 1446.0], [1.64618667E12, 1829.0], [1.6461868E12, 3842.0], [1.64618654E12, 1076.0], [1.64618671E12, 1763.0], [1.64618673E12, 954.0], [1.64618643E12, 985.0], [1.64618656E12, 1573.0], [1.64618677E12, 2607.0], [1.64618647E12, 949.0], [1.6461866E12, 1391.0], [1.64618681E12, 1306.0], [1.64618651E12, 1943.0], [1.64618664E12, 2088.0], [1.64618655E12, 924.0], [1.64618668E12, 1192.0], [1.64618657E12, 1232.0], [1.64618674E12, 1504.0], [1.64618644E12, 2436.0], [1.64618661E12, 4001.0], [1.64618678E12, 1561.0], [1.64618648E12, 919.0], [1.64618665E12, 1939.0], [1.64618682E12, 1499.0], [1.64618652E12, 932.0], [1.64618669E12, 1550.0], [1.64618658E12, 1105.0], [1.64618675E12, 5098.0], [1.64618662E12, 1686.0], [1.64618679E12, 1420.0], [1.64618645E12, 1139.0], [1.64618666E12, 1854.0], [1.64618683E12, 1280.0], [1.64618649E12, 1075.0], [1.6461867E12, 1334.0], [1.64618653E12, 988.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64618659E12, 936.4000000000001], [1.64618672E12, 937.2], [1.64618646E12, 889.5], [1.64618663E12, 797.0], [1.64618676E12, 1393.0], [1.6461865E12, 1116.0], [1.64618667E12, 1288.0], [1.6461868E12, 1007.5000000000001], [1.64618654E12, 772.0], [1.64618671E12, 983.9], [1.64618673E12, 879.4], [1.64618643E12, 985.0], [1.64618656E12, 1332.2], [1.64618677E12, 881.1000000000001], [1.64618647E12, 677.2000000000005], [1.6461866E12, 1110.2000000000007], [1.64618681E12, 1023.0], [1.64618651E12, 1871.2], [1.64618664E12, 1085.2000000000003], [1.64618655E12, 712.8000000000001], [1.64618668E12, 1093.8], [1.64618657E12, 1134.0000000000002], [1.64618674E12, 1301.4000000000003], [1.64618644E12, 1825.6], [1.64618661E12, 2159.9000000000015], [1.64618678E12, 1078.0], [1.64618648E12, 701.0], [1.64618665E12, 1138.5], [1.64618682E12, 1017.2], [1.64618652E12, 654.0], [1.64618669E12, 1168.8000000000002], [1.64618658E12, 1074.0], [1.64618675E12, 1914.0], [1.64618662E12, 1375.4], [1.64618679E12, 1014.6000000000001], [1.64618645E12, 732.2000000000003], [1.64618666E12, 1163.9999999999998], [1.64618683E12, 1037.0], [1.64618649E12, 708.8000000000001], [1.6461867E12, 1168.0], [1.64618653E12, 608.0000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64618659E12, 5388.0], [1.64618672E12, 2506.0], [1.64618646E12, 1261.0], [1.64618663E12, 856.0], [1.64618676E12, 2135.0], [1.6461865E12, 1446.0], [1.64618667E12, 1829.0], [1.6461868E12, 3842.0], [1.64618654E12, 1076.0], [1.64618671E12, 1763.0], [1.64618673E12, 954.0], [1.64618643E12, 985.0], [1.64618656E12, 1573.0], [1.64618677E12, 2607.0], [1.64618647E12, 949.0], [1.6461866E12, 1391.0], [1.64618681E12, 1306.0], [1.64618651E12, 1943.0], [1.64618664E12, 2088.0], [1.64618655E12, 924.0], [1.64618668E12, 1192.0], [1.64618657E12, 1232.0], [1.64618674E12, 1504.0], [1.64618644E12, 2436.0], [1.64618661E12, 4001.0], [1.64618678E12, 1561.0], [1.64618648E12, 919.0], [1.64618665E12, 1939.0], [1.64618682E12, 1499.0], [1.64618652E12, 932.0], [1.64618669E12, 1550.0], [1.64618658E12, 1105.0], [1.64618675E12, 5098.0], [1.64618662E12, 1686.0], [1.64618679E12, 1420.0], [1.64618645E12, 1139.0], [1.64618666E12, 1854.0], [1.64618683E12, 1280.0], [1.64618649E12, 1075.0], [1.6461867E12, 1334.0], [1.64618653E12, 988.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64618659E12, 4057.1999999999966], [1.64618672E12, 2037.699999999999], [1.64618646E12, 1186.5], [1.64618663E12, 841.5], [1.64618676E12, 1909.599999999999], [1.6461865E12, 1441.0], [1.64618667E12, 1759.75], [1.6461868E12, 2895.2499999999964], [1.64618654E12, 1005.25], [1.64618671E12, 1495.949999999999], [1.64618673E12, 929.8499999999999], [1.64618643E12, 985.0], [1.64618656E12, 1489.6999999999996], [1.64618677E12, 2029.1499999999976], [1.64618647E12, 906.6999999999999], [1.6461866E12, 1368.9999999999998], [1.64618681E12, 1235.75], [1.64618651E12, 1929.2], [1.64618664E12, 1823.7499999999989], [1.64618655E12, 861.8999999999999], [1.64618668E12, 1167.3999999999999], [1.64618657E12, 1221.6], [1.64618674E12, 1476.6999999999998], [1.64618644E12, 2248.799999999999], [1.64618661E12, 3805.6999999999994], [1.64618678E12, 1494.25], [1.64618648E12, 913.0], [1.64618665E12, 1742.5], [1.64618682E12, 1333.7999999999993], [1.64618652E12, 864.25], [1.64618669E12, 1445.8999999999996], [1.64618658E12, 1099.05], [1.64618675E12, 4479.25], [1.64618662E12, 1601.1], [1.64618679E12, 1307.9999999999995], [1.64618645E12, 1041.7999999999997], [1.64618666E12, 1678.799999999999], [1.64618683E12, 1243.25], [1.64618649E12, 975.2499999999995], [1.6461867E12, 1309.25], [1.64618653E12, 880.2999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64618659E12, 394.0], [1.64618672E12, 400.0], [1.64618646E12, 287.0], [1.64618663E12, 282.0], [1.64618676E12, 277.0], [1.6461865E12, 277.0], [1.64618667E12, 412.0], [1.6461868E12, 335.0], [1.64618654E12, 292.0], [1.64618671E12, 400.0], [1.64618673E12, 369.0], [1.64618643E12, 985.0], [1.64618656E12, 357.0], [1.64618677E12, 333.0], [1.64618647E12, 288.0], [1.6461866E12, 403.0], [1.64618681E12, 354.0], [1.64618651E12, 316.0], [1.64618664E12, 290.0], [1.64618655E12, 307.0], [1.64618668E12, 405.0], [1.64618657E12, 398.0], [1.64618674E12, 396.0], [1.64618644E12, 303.0], [1.64618661E12, 365.0], [1.64618678E12, 314.0], [1.64618648E12, 279.0], [1.64618665E12, 407.0], [1.64618682E12, 333.0], [1.64618652E12, 315.0], [1.64618669E12, 429.0], [1.64618658E12, 370.0], [1.64618675E12, 315.0], [1.64618662E12, 386.0], [1.64618679E12, 339.0], [1.64618645E12, 278.0], [1.64618666E12, 381.0], [1.64618683E12, 359.0], [1.64618649E12, 290.0], [1.6461867E12, 403.0], [1.64618653E12, 284.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64618659E12, 538.0], [1.64618672E12, 592.0], [1.64618646E12, 418.5], [1.64618663E12, 475.0], [1.64618676E12, 513.0], [1.6461865E12, 465.5], [1.64618667E12, 566.0], [1.6461868E12, 555.0], [1.64618654E12, 456.5], [1.64618671E12, 595.5], [1.64618673E12, 587.5], [1.64618643E12, 985.0], [1.64618656E12, 562.5], [1.64618677E12, 437.0], [1.64618647E12, 397.0], [1.6461866E12, 606.0], [1.64618681E12, 468.0], [1.64618651E12, 564.0], [1.64618664E12, 568.0], [1.64618655E12, 459.0], [1.64618668E12, 633.0], [1.64618657E12, 581.0], [1.64618674E12, 501.0], [1.64618644E12, 453.0], [1.64618661E12, 645.5], [1.64618678E12, 473.5], [1.64618648E12, 370.0], [1.64618665E12, 564.0], [1.64618682E12, 548.5], [1.64618652E12, 515.5], [1.64618669E12, 729.0], [1.64618658E12, 539.0], [1.64618675E12, 604.0], [1.64618662E12, 589.0], [1.64618679E12, 484.0], [1.64618645E12, 412.0], [1.64618666E12, 566.0], [1.64618683E12, 477.5], [1.64618649E12, 395.0], [1.6461867E12, 709.0], [1.64618653E12, 476.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.64618683E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 523.0, "minX": 1.0, "maxY": 959.0, "series": [{"data": [[1.0, 573.0], [4.0, 568.0], [2.0, 525.0], [3.0, 523.0], [6.0, 959.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 523.0, "minX": 1.0, "maxY": 959.0, "series": [{"data": [[1.0, 573.0], [4.0, 567.5], [2.0, 525.0], [3.0, 523.0], [6.0, 959.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.64618643E12, "maxY": 2.6, "series": [{"data": [[1.64618659E12, 2.5], [1.64618672E12, 2.5], [1.64618646E12, 2.4], [1.64618663E12, 2.5], [1.64618676E12, 2.5], [1.6461865E12, 2.5], [1.64618667E12, 2.5], [1.6461868E12, 2.6], [1.64618654E12, 2.5], [1.64618671E12, 2.5], [1.64618673E12, 2.5], [1.64618643E12, 0.5], [1.64618656E12, 2.5], [1.64618677E12, 2.6], [1.64618647E12, 2.5], [1.6461866E12, 2.5], [1.64618681E12, 2.5], [1.64618651E12, 2.5], [1.64618664E12, 2.5], [1.64618655E12, 2.5], [1.64618668E12, 2.5], [1.64618657E12, 2.5], [1.64618674E12, 2.5], [1.64618644E12, 2.4], [1.64618661E12, 2.5], [1.64618678E12, 2.5], [1.64618648E12, 2.5], [1.64618665E12, 2.5], [1.64618682E12, 2.6], [1.64618652E12, 2.5], [1.64618669E12, 2.5], [1.64618658E12, 2.4], [1.64618675E12, 2.5], [1.64618662E12, 2.5], [1.64618679E12, 2.5], [1.64618645E12, 2.5], [1.64618666E12, 2.5], [1.64618683E12, 2.2], [1.64618649E12, 2.4], [1.6461867E12, 2.5], [1.64618653E12, 2.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.64618683E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.64618643E12, "maxY": 2.7, "series": [{"data": [[1.64618659E12, 2.5], [1.64618672E12, 2.5], [1.64618646E12, 2.4], [1.64618663E12, 2.4], [1.64618676E12, 2.6], [1.6461865E12, 2.4], [1.64618667E12, 2.4], [1.6461868E12, 2.6], [1.64618654E12, 2.4], [1.64618671E12, 2.6], [1.64618673E12, 2.6], [1.64618643E12, 0.1], [1.64618656E12, 2.6], [1.64618677E12, 2.6], [1.64618647E12, 2.5], [1.6461866E12, 2.3], [1.64618681E12, 2.4], [1.64618651E12, 2.5], [1.64618664E12, 2.6], [1.64618655E12, 2.5], [1.64618668E12, 2.5], [1.64618657E12, 2.3], [1.64618674E12, 2.5], [1.64618644E12, 2.7], [1.64618661E12, 2.6], [1.64618678E12, 2.4], [1.64618648E12, 2.4], [1.64618665E12, 2.4], [1.64618682E12, 2.6], [1.64618652E12, 2.4], [1.64618669E12, 2.5], [1.64618658E12, 2.6], [1.64618675E12, 2.4], [1.64618662E12, 2.5], [1.64618679E12, 2.6], [1.64618645E12, 2.5], [1.64618666E12, 2.7], [1.64618683E12, 2.4], [1.64618649E12, 2.6], [1.6461867E12, 2.4], [1.64618653E12, 2.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.64618683E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.64618643E12, "maxY": 2.7, "series": [{"data": [[1.64618659E12, 2.5], [1.64618672E12, 2.5], [1.64618646E12, 2.4], [1.64618663E12, 2.4], [1.64618676E12, 2.6], [1.6461865E12, 2.4], [1.64618667E12, 2.4], [1.6461868E12, 2.6], [1.64618654E12, 2.4], [1.64618671E12, 2.6], [1.64618673E12, 2.6], [1.64618643E12, 0.1], [1.64618656E12, 2.6], [1.64618677E12, 2.6], [1.64618647E12, 2.5], [1.6461866E12, 2.3], [1.64618681E12, 2.4], [1.64618651E12, 2.5], [1.64618664E12, 2.6], [1.64618655E12, 2.5], [1.64618668E12, 2.5], [1.64618657E12, 2.3], [1.64618674E12, 2.5], [1.64618644E12, 2.7], [1.64618661E12, 2.6], [1.64618678E12, 2.4], [1.64618648E12, 2.4], [1.64618665E12, 2.4], [1.64618682E12, 2.6], [1.64618652E12, 2.4], [1.64618669E12, 2.5], [1.64618658E12, 2.6], [1.64618675E12, 2.4], [1.64618662E12, 2.5], [1.64618679E12, 2.6], [1.64618645E12, 2.5], [1.64618666E12, 2.7], [1.64618683E12, 2.4], [1.64618649E12, 2.6], [1.6461867E12, 2.4], [1.64618653E12, 2.5]], "isOverall": false, "label": "Plot and download-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.64618683E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.64618643E12, "maxY": 2.7, "series": [{"data": [[1.64618659E12, 2.5], [1.64618672E12, 2.5], [1.64618646E12, 2.4], [1.64618663E12, 2.4], [1.64618676E12, 2.6], [1.6461865E12, 2.4], [1.64618667E12, 2.4], [1.6461868E12, 2.6], [1.64618654E12, 2.4], [1.64618671E12, 2.6], [1.64618673E12, 2.6], [1.64618643E12, 0.1], [1.64618656E12, 2.6], [1.64618677E12, 2.6], [1.64618647E12, 2.5], [1.6461866E12, 2.3], [1.64618681E12, 2.4], [1.64618651E12, 2.5], [1.64618664E12, 2.6], [1.64618655E12, 2.5], [1.64618668E12, 2.5], [1.64618657E12, 2.3], [1.64618674E12, 2.5], [1.64618644E12, 2.7], [1.64618661E12, 2.6], [1.64618678E12, 2.4], [1.64618648E12, 2.4], [1.64618665E12, 2.4], [1.64618682E12, 2.6], [1.64618652E12, 2.4], [1.64618669E12, 2.5], [1.64618658E12, 2.6], [1.64618675E12, 2.4], [1.64618662E12, 2.5], [1.64618679E12, 2.6], [1.64618645E12, 2.5], [1.64618666E12, 2.7], [1.64618683E12, 2.4], [1.64618649E12, 2.6], [1.6461867E12, 2.4], [1.64618653E12, 2.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.64618683E12, "title": "Total Transactions Per Second"}},
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

