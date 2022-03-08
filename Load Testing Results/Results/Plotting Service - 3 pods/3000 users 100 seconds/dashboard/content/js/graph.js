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
        data: {"result": {"minY": 289.0, "minX": 0.0, "maxY": 3631.0, "series": [{"data": [[0.0, 289.0], [0.1, 298.0], [0.2, 303.0], [0.3, 315.0], [0.4, 319.0], [0.5, 324.0], [0.6, 328.0], [0.7, 330.0], [0.8, 332.0], [0.9, 336.0], [1.0, 339.0], [1.1, 341.0], [1.2, 342.0], [1.3, 344.0], [1.4, 345.0], [1.5, 347.0], [1.6, 349.0], [1.7, 352.0], [1.8, 355.0], [1.9, 356.0], [2.0, 359.0], [2.1, 359.0], [2.2, 361.0], [2.3, 362.0], [2.4, 364.0], [2.5, 366.0], [2.6, 367.0], [2.7, 368.0], [2.8, 369.0], [2.9, 372.0], [3.0, 373.0], [3.1, 373.0], [3.2, 375.0], [3.3, 376.0], [3.4, 377.0], [3.5, 379.0], [3.6, 380.0], [3.7, 381.0], [3.8, 381.0], [3.9, 382.0], [4.0, 383.0], [4.1, 384.0], [4.2, 386.0], [4.3, 386.0], [4.4, 388.0], [4.5, 389.0], [4.6, 390.0], [4.7, 391.0], [4.8, 393.0], [4.9, 395.0], [5.0, 396.0], [5.1, 396.0], [5.2, 397.0], [5.3, 398.0], [5.4, 400.0], [5.5, 400.0], [5.6, 400.0], [5.7, 402.0], [5.8, 403.0], [5.9, 404.0], [6.0, 405.0], [6.1, 405.0], [6.2, 406.0], [6.3, 406.0], [6.4, 408.0], [6.5, 408.0], [6.6, 409.0], [6.7, 409.0], [6.8, 411.0], [6.9, 411.0], [7.0, 413.0], [7.1, 414.0], [7.2, 416.0], [7.3, 417.0], [7.4, 418.0], [7.5, 420.0], [7.6, 423.0], [7.7, 423.0], [7.8, 424.0], [7.9, 425.0], [8.0, 425.0], [8.1, 426.0], [8.2, 427.0], [8.3, 428.0], [8.4, 428.0], [8.5, 429.0], [8.6, 429.0], [8.7, 429.0], [8.8, 431.0], [8.9, 432.0], [9.0, 432.0], [9.1, 434.0], [9.2, 435.0], [9.3, 436.0], [9.4, 436.0], [9.5, 437.0], [9.6, 437.0], [9.7, 438.0], [9.8, 439.0], [9.9, 439.0], [10.0, 439.0], [10.1, 440.0], [10.2, 440.0], [10.3, 440.0], [10.4, 441.0], [10.5, 441.0], [10.6, 442.0], [10.7, 442.0], [10.8, 442.0], [10.9, 442.0], [11.0, 443.0], [11.1, 443.0], [11.2, 444.0], [11.3, 444.0], [11.4, 444.0], [11.5, 445.0], [11.6, 446.0], [11.7, 446.0], [11.8, 447.0], [11.9, 447.0], [12.0, 448.0], [12.1, 448.0], [12.2, 448.0], [12.3, 449.0], [12.4, 449.0], [12.5, 450.0], [12.6, 450.0], [12.7, 451.0], [12.8, 452.0], [12.9, 453.0], [13.0, 454.0], [13.1, 454.0], [13.2, 455.0], [13.3, 456.0], [13.4, 457.0], [13.5, 457.0], [13.6, 458.0], [13.7, 458.0], [13.8, 459.0], [13.9, 460.0], [14.0, 460.0], [14.1, 461.0], [14.2, 461.0], [14.3, 462.0], [14.4, 463.0], [14.5, 464.0], [14.6, 466.0], [14.7, 466.0], [14.8, 467.0], [14.9, 467.0], [15.0, 468.0], [15.1, 469.0], [15.2, 470.0], [15.3, 470.0], [15.4, 470.0], [15.5, 471.0], [15.6, 471.0], [15.7, 472.0], [15.8, 472.0], [15.9, 473.0], [16.0, 474.0], [16.1, 474.0], [16.2, 475.0], [16.3, 475.0], [16.4, 475.0], [16.5, 475.0], [16.6, 476.0], [16.7, 476.0], [16.8, 477.0], [16.9, 478.0], [17.0, 478.0], [17.1, 478.0], [17.2, 479.0], [17.3, 479.0], [17.4, 479.0], [17.5, 480.0], [17.6, 481.0], [17.7, 481.0], [17.8, 481.0], [17.9, 482.0], [18.0, 482.0], [18.1, 482.0], [18.2, 483.0], [18.3, 483.0], [18.4, 484.0], [18.5, 484.0], [18.6, 485.0], [18.7, 485.0], [18.8, 485.0], [18.9, 486.0], [19.0, 487.0], [19.1, 487.0], [19.2, 487.0], [19.3, 488.0], [19.4, 489.0], [19.5, 489.0], [19.6, 490.0], [19.7, 490.0], [19.8, 491.0], [19.9, 491.0], [20.0, 491.0], [20.1, 492.0], [20.2, 493.0], [20.3, 493.0], [20.4, 494.0], [20.5, 495.0], [20.6, 495.0], [20.7, 495.0], [20.8, 496.0], [20.9, 496.0], [21.0, 496.0], [21.1, 497.0], [21.2, 498.0], [21.3, 498.0], [21.4, 499.0], [21.5, 499.0], [21.6, 499.0], [21.7, 500.0], [21.8, 500.0], [21.9, 501.0], [22.0, 502.0], [22.1, 502.0], [22.2, 502.0], [22.3, 503.0], [22.4, 503.0], [22.5, 504.0], [22.6, 504.0], [22.7, 505.0], [22.8, 505.0], [22.9, 505.0], [23.0, 506.0], [23.1, 507.0], [23.2, 507.0], [23.3, 508.0], [23.4, 508.0], [23.5, 508.0], [23.6, 509.0], [23.7, 509.0], [23.8, 509.0], [23.9, 510.0], [24.0, 510.0], [24.1, 511.0], [24.2, 511.0], [24.3, 511.0], [24.4, 512.0], [24.5, 512.0], [24.6, 513.0], [24.7, 513.0], [24.8, 514.0], [24.9, 514.0], [25.0, 515.0], [25.1, 515.0], [25.2, 515.0], [25.3, 515.0], [25.4, 516.0], [25.5, 516.0], [25.6, 516.0], [25.7, 517.0], [25.8, 517.0], [25.9, 517.0], [26.0, 518.0], [26.1, 518.0], [26.2, 519.0], [26.3, 520.0], [26.4, 520.0], [26.5, 521.0], [26.6, 521.0], [26.7, 521.0], [26.8, 522.0], [26.9, 522.0], [27.0, 522.0], [27.1, 523.0], [27.2, 523.0], [27.3, 524.0], [27.4, 524.0], [27.5, 524.0], [27.6, 525.0], [27.7, 525.0], [27.8, 526.0], [27.9, 526.0], [28.0, 527.0], [28.1, 528.0], [28.2, 528.0], [28.3, 529.0], [28.4, 529.0], [28.5, 530.0], [28.6, 530.0], [28.7, 531.0], [28.8, 531.0], [28.9, 531.0], [29.0, 532.0], [29.1, 532.0], [29.2, 532.0], [29.3, 533.0], [29.4, 533.0], [29.5, 534.0], [29.6, 534.0], [29.7, 535.0], [29.8, 535.0], [29.9, 536.0], [30.0, 536.0], [30.1, 536.0], [30.2, 537.0], [30.3, 538.0], [30.4, 538.0], [30.5, 538.0], [30.6, 539.0], [30.7, 539.0], [30.8, 539.0], [30.9, 540.0], [31.0, 540.0], [31.1, 540.0], [31.2, 540.0], [31.3, 541.0], [31.4, 541.0], [31.5, 541.0], [31.6, 542.0], [31.7, 542.0], [31.8, 543.0], [31.9, 543.0], [32.0, 544.0], [32.1, 544.0], [32.2, 544.0], [32.3, 544.0], [32.4, 545.0], [32.5, 545.0], [32.6, 546.0], [32.7, 546.0], [32.8, 546.0], [32.9, 547.0], [33.0, 548.0], [33.1, 549.0], [33.2, 549.0], [33.3, 549.0], [33.4, 549.0], [33.5, 550.0], [33.6, 550.0], [33.7, 550.0], [33.8, 551.0], [33.9, 551.0], [34.0, 551.0], [34.1, 552.0], [34.2, 552.0], [34.3, 552.0], [34.4, 552.0], [34.5, 553.0], [34.6, 554.0], [34.7, 554.0], [34.8, 554.0], [34.9, 554.0], [35.0, 555.0], [35.1, 555.0], [35.2, 555.0], [35.3, 556.0], [35.4, 556.0], [35.5, 557.0], [35.6, 557.0], [35.7, 558.0], [35.8, 558.0], [35.9, 558.0], [36.0, 558.0], [36.1, 558.0], [36.2, 558.0], [36.3, 559.0], [36.4, 559.0], [36.5, 560.0], [36.6, 560.0], [36.7, 561.0], [36.8, 562.0], [36.9, 562.0], [37.0, 562.0], [37.1, 562.0], [37.2, 563.0], [37.3, 563.0], [37.4, 564.0], [37.5, 564.0], [37.6, 566.0], [37.7, 566.0], [37.8, 566.0], [37.9, 567.0], [38.0, 567.0], [38.1, 567.0], [38.2, 568.0], [38.3, 568.0], [38.4, 569.0], [38.5, 569.0], [38.6, 569.0], [38.7, 570.0], [38.8, 570.0], [38.9, 571.0], [39.0, 571.0], [39.1, 571.0], [39.2, 572.0], [39.3, 572.0], [39.4, 573.0], [39.5, 573.0], [39.6, 574.0], [39.7, 574.0], [39.8, 574.0], [39.9, 575.0], [40.0, 575.0], [40.1, 575.0], [40.2, 576.0], [40.3, 576.0], [40.4, 576.0], [40.5, 577.0], [40.6, 577.0], [40.7, 577.0], [40.8, 577.0], [40.9, 578.0], [41.0, 579.0], [41.1, 579.0], [41.2, 579.0], [41.3, 580.0], [41.4, 580.0], [41.5, 581.0], [41.6, 582.0], [41.7, 583.0], [41.8, 583.0], [41.9, 584.0], [42.0, 584.0], [42.1, 585.0], [42.2, 586.0], [42.3, 587.0], [42.4, 587.0], [42.5, 587.0], [42.6, 588.0], [42.7, 588.0], [42.8, 588.0], [42.9, 588.0], [43.0, 589.0], [43.1, 589.0], [43.2, 589.0], [43.3, 590.0], [43.4, 590.0], [43.5, 590.0], [43.6, 591.0], [43.7, 591.0], [43.8, 591.0], [43.9, 592.0], [44.0, 592.0], [44.1, 592.0], [44.2, 593.0], [44.3, 593.0], [44.4, 594.0], [44.5, 594.0], [44.6, 594.0], [44.7, 595.0], [44.8, 595.0], [44.9, 596.0], [45.0, 596.0], [45.1, 597.0], [45.2, 597.0], [45.3, 598.0], [45.4, 599.0], [45.5, 599.0], [45.6, 599.0], [45.7, 600.0], [45.8, 601.0], [45.9, 601.0], [46.0, 601.0], [46.1, 601.0], [46.2, 602.0], [46.3, 602.0], [46.4, 602.0], [46.5, 603.0], [46.6, 604.0], [46.7, 604.0], [46.8, 604.0], [46.9, 605.0], [47.0, 605.0], [47.1, 606.0], [47.2, 606.0], [47.3, 606.0], [47.4, 606.0], [47.5, 607.0], [47.6, 607.0], [47.7, 608.0], [47.8, 608.0], [47.9, 608.0], [48.0, 609.0], [48.1, 610.0], [48.2, 610.0], [48.3, 610.0], [48.4, 611.0], [48.5, 611.0], [48.6, 611.0], [48.7, 612.0], [48.8, 612.0], [48.9, 613.0], [49.0, 614.0], [49.1, 614.0], [49.2, 614.0], [49.3, 615.0], [49.4, 615.0], [49.5, 616.0], [49.6, 617.0], [49.7, 617.0], [49.8, 618.0], [49.9, 618.0], [50.0, 619.0], [50.1, 619.0], [50.2, 619.0], [50.3, 620.0], [50.4, 620.0], [50.5, 620.0], [50.6, 621.0], [50.7, 621.0], [50.8, 621.0], [50.9, 623.0], [51.0, 623.0], [51.1, 623.0], [51.2, 624.0], [51.3, 624.0], [51.4, 624.0], [51.5, 625.0], [51.6, 625.0], [51.7, 626.0], [51.8, 626.0], [51.9, 627.0], [52.0, 628.0], [52.1, 628.0], [52.2, 628.0], [52.3, 629.0], [52.4, 630.0], [52.5, 630.0], [52.6, 630.0], [52.7, 631.0], [52.8, 631.0], [52.9, 632.0], [53.0, 632.0], [53.1, 633.0], [53.2, 633.0], [53.3, 633.0], [53.4, 634.0], [53.5, 634.0], [53.6, 635.0], [53.7, 635.0], [53.8, 636.0], [53.9, 636.0], [54.0, 637.0], [54.1, 637.0], [54.2, 637.0], [54.3, 637.0], [54.4, 638.0], [54.5, 638.0], [54.6, 638.0], [54.7, 639.0], [54.8, 639.0], [54.9, 639.0], [55.0, 640.0], [55.1, 641.0], [55.2, 641.0], [55.3, 641.0], [55.4, 642.0], [55.5, 642.0], [55.6, 643.0], [55.7, 643.0], [55.8, 644.0], [55.9, 644.0], [56.0, 644.0], [56.1, 645.0], [56.2, 645.0], [56.3, 646.0], [56.4, 646.0], [56.5, 646.0], [56.6, 647.0], [56.7, 647.0], [56.8, 648.0], [56.9, 648.0], [57.0, 649.0], [57.1, 649.0], [57.2, 649.0], [57.3, 650.0], [57.4, 651.0], [57.5, 652.0], [57.6, 653.0], [57.7, 653.0], [57.8, 654.0], [57.9, 654.0], [58.0, 654.0], [58.1, 655.0], [58.2, 655.0], [58.3, 656.0], [58.4, 656.0], [58.5, 657.0], [58.6, 658.0], [58.7, 659.0], [58.8, 659.0], [58.9, 661.0], [59.0, 661.0], [59.1, 662.0], [59.2, 663.0], [59.3, 663.0], [59.4, 664.0], [59.5, 664.0], [59.6, 665.0], [59.7, 665.0], [59.8, 665.0], [59.9, 666.0], [60.0, 666.0], [60.1, 666.0], [60.2, 668.0], [60.3, 668.0], [60.4, 669.0], [60.5, 669.0], [60.6, 669.0], [60.7, 670.0], [60.8, 671.0], [60.9, 672.0], [61.0, 673.0], [61.1, 673.0], [61.2, 674.0], [61.3, 674.0], [61.4, 675.0], [61.5, 675.0], [61.6, 676.0], [61.7, 676.0], [61.8, 677.0], [61.9, 678.0], [62.0, 679.0], [62.1, 680.0], [62.2, 680.0], [62.3, 680.0], [62.4, 681.0], [62.5, 681.0], [62.6, 683.0], [62.7, 683.0], [62.8, 683.0], [62.9, 684.0], [63.0, 685.0], [63.1, 687.0], [63.2, 688.0], [63.3, 688.0], [63.4, 689.0], [63.5, 690.0], [63.6, 690.0], [63.7, 690.0], [63.8, 691.0], [63.9, 692.0], [64.0, 692.0], [64.1, 693.0], [64.2, 694.0], [64.3, 694.0], [64.4, 695.0], [64.5, 696.0], [64.6, 696.0], [64.7, 696.0], [64.8, 697.0], [64.9, 697.0], [65.0, 698.0], [65.1, 699.0], [65.2, 700.0], [65.3, 700.0], [65.4, 701.0], [65.5, 701.0], [65.6, 702.0], [65.7, 703.0], [65.8, 704.0], [65.9, 705.0], [66.0, 705.0], [66.1, 706.0], [66.2, 706.0], [66.3, 707.0], [66.4, 708.0], [66.5, 708.0], [66.6, 708.0], [66.7, 710.0], [66.8, 710.0], [66.9, 711.0], [67.0, 714.0], [67.1, 714.0], [67.2, 715.0], [67.3, 716.0], [67.4, 717.0], [67.5, 717.0], [67.6, 717.0], [67.7, 719.0], [67.8, 720.0], [67.9, 721.0], [68.0, 722.0], [68.1, 723.0], [68.2, 723.0], [68.3, 725.0], [68.4, 725.0], [68.5, 726.0], [68.6, 726.0], [68.7, 727.0], [68.8, 727.0], [68.9, 729.0], [69.0, 729.0], [69.1, 730.0], [69.2, 731.0], [69.3, 732.0], [69.4, 732.0], [69.5, 733.0], [69.6, 734.0], [69.7, 735.0], [69.8, 736.0], [69.9, 736.0], [70.0, 738.0], [70.1, 739.0], [70.2, 739.0], [70.3, 740.0], [70.4, 742.0], [70.5, 742.0], [70.6, 743.0], [70.7, 744.0], [70.8, 745.0], [70.9, 747.0], [71.0, 748.0], [71.1, 748.0], [71.2, 750.0], [71.3, 750.0], [71.4, 752.0], [71.5, 752.0], [71.6, 753.0], [71.7, 754.0], [71.8, 755.0], [71.9, 755.0], [72.0, 756.0], [72.1, 757.0], [72.2, 757.0], [72.3, 758.0], [72.4, 759.0], [72.5, 759.0], [72.6, 761.0], [72.7, 762.0], [72.8, 763.0], [72.9, 763.0], [73.0, 764.0], [73.1, 767.0], [73.2, 769.0], [73.3, 770.0], [73.4, 771.0], [73.5, 773.0], [73.6, 773.0], [73.7, 775.0], [73.8, 776.0], [73.9, 777.0], [74.0, 778.0], [74.1, 778.0], [74.2, 779.0], [74.3, 780.0], [74.4, 781.0], [74.5, 782.0], [74.6, 783.0], [74.7, 784.0], [74.8, 784.0], [74.9, 786.0], [75.0, 786.0], [75.1, 788.0], [75.2, 790.0], [75.3, 790.0], [75.4, 791.0], [75.5, 792.0], [75.6, 795.0], [75.7, 796.0], [75.8, 797.0], [75.9, 799.0], [76.0, 800.0], [76.1, 802.0], [76.2, 804.0], [76.3, 804.0], [76.4, 805.0], [76.5, 806.0], [76.6, 807.0], [76.7, 808.0], [76.8, 810.0], [76.9, 811.0], [77.0, 812.0], [77.1, 813.0], [77.2, 813.0], [77.3, 814.0], [77.4, 816.0], [77.5, 816.0], [77.6, 817.0], [77.7, 817.0], [77.8, 818.0], [77.9, 820.0], [78.0, 821.0], [78.1, 822.0], [78.2, 823.0], [78.3, 824.0], [78.4, 825.0], [78.5, 825.0], [78.6, 827.0], [78.7, 828.0], [78.8, 829.0], [78.9, 831.0], [79.0, 831.0], [79.1, 832.0], [79.2, 833.0], [79.3, 835.0], [79.4, 836.0], [79.5, 839.0], [79.6, 839.0], [79.7, 841.0], [79.8, 843.0], [79.9, 844.0], [80.0, 845.0], [80.1, 846.0], [80.2, 847.0], [80.3, 849.0], [80.4, 851.0], [80.5, 853.0], [80.6, 854.0], [80.7, 855.0], [80.8, 856.0], [80.9, 858.0], [81.0, 860.0], [81.1, 861.0], [81.2, 862.0], [81.3, 862.0], [81.4, 865.0], [81.5, 866.0], [81.6, 868.0], [81.7, 869.0], [81.8, 871.0], [81.9, 873.0], [82.0, 874.0], [82.1, 876.0], [82.2, 878.0], [82.3, 881.0], [82.4, 882.0], [82.5, 883.0], [82.6, 884.0], [82.7, 886.0], [82.8, 887.0], [82.9, 889.0], [83.0, 890.0], [83.1, 891.0], [83.2, 892.0], [83.3, 894.0], [83.4, 898.0], [83.5, 899.0], [83.6, 904.0], [83.7, 907.0], [83.8, 909.0], [83.9, 911.0], [84.0, 913.0], [84.1, 914.0], [84.2, 914.0], [84.3, 915.0], [84.4, 916.0], [84.5, 918.0], [84.6, 921.0], [84.7, 923.0], [84.8, 925.0], [84.9, 927.0], [85.0, 928.0], [85.1, 931.0], [85.2, 933.0], [85.3, 935.0], [85.4, 936.0], [85.5, 937.0], [85.6, 938.0], [85.7, 941.0], [85.8, 941.0], [85.9, 942.0], [86.0, 944.0], [86.1, 945.0], [86.2, 950.0], [86.3, 953.0], [86.4, 955.0], [86.5, 957.0], [86.6, 957.0], [86.7, 958.0], [86.8, 960.0], [86.9, 963.0], [87.0, 964.0], [87.1, 965.0], [87.2, 970.0], [87.3, 971.0], [87.4, 973.0], [87.5, 975.0], [87.6, 981.0], [87.7, 985.0], [87.8, 989.0], [87.9, 990.0], [88.0, 995.0], [88.1, 1000.0], [88.2, 1001.0], [88.3, 1004.0], [88.4, 1008.0], [88.5, 1009.0], [88.6, 1010.0], [88.7, 1013.0], [88.8, 1016.0], [88.9, 1018.0], [89.0, 1019.0], [89.1, 1020.0], [89.2, 1022.0], [89.3, 1023.0], [89.4, 1030.0], [89.5, 1031.0], [89.6, 1033.0], [89.7, 1035.0], [89.8, 1040.0], [89.9, 1044.0], [90.0, 1047.0], [90.1, 1049.0], [90.2, 1051.0], [90.3, 1051.0], [90.4, 1058.0], [90.5, 1064.0], [90.6, 1069.0], [90.7, 1071.0], [90.8, 1073.0], [90.9, 1074.0], [91.0, 1080.0], [91.1, 1083.0], [91.2, 1089.0], [91.3, 1090.0], [91.4, 1091.0], [91.5, 1092.0], [91.6, 1096.0], [91.7, 1098.0], [91.8, 1102.0], [91.9, 1106.0], [92.0, 1109.0], [92.1, 1110.0], [92.2, 1112.0], [92.3, 1119.0], [92.4, 1121.0], [92.5, 1125.0], [92.6, 1129.0], [92.7, 1130.0], [92.8, 1135.0], [92.9, 1136.0], [93.0, 1144.0], [93.1, 1149.0], [93.2, 1151.0], [93.3, 1163.0], [93.4, 1168.0], [93.5, 1171.0], [93.6, 1177.0], [93.7, 1182.0], [93.8, 1194.0], [93.9, 1196.0], [94.0, 1202.0], [94.1, 1204.0], [94.2, 1211.0], [94.3, 1216.0], [94.4, 1218.0], [94.5, 1221.0], [94.6, 1232.0], [94.7, 1238.0], [94.8, 1246.0], [94.9, 1256.0], [95.0, 1269.0], [95.1, 1274.0], [95.2, 1283.0], [95.3, 1286.0], [95.4, 1291.0], [95.5, 1294.0], [95.6, 1300.0], [95.7, 1310.0], [95.8, 1326.0], [95.9, 1335.0], [96.0, 1342.0], [96.1, 1350.0], [96.2, 1352.0], [96.3, 1357.0], [96.4, 1358.0], [96.5, 1371.0], [96.6, 1377.0], [96.7, 1390.0], [96.8, 1394.0], [96.9, 1414.0], [97.0, 1421.0], [97.1, 1433.0], [97.2, 1441.0], [97.3, 1454.0], [97.4, 1461.0], [97.5, 1474.0], [97.6, 1481.0], [97.7, 1486.0], [97.8, 1506.0], [97.9, 1525.0], [98.0, 1534.0], [98.1, 1557.0], [98.2, 1568.0], [98.3, 1586.0], [98.4, 1605.0], [98.5, 1630.0], [98.6, 1644.0], [98.7, 1657.0], [98.8, 1674.0], [98.9, 1698.0], [99.0, 1746.0], [99.1, 1773.0], [99.2, 1792.0], [99.3, 1931.0], [99.4, 1968.0], [99.5, 2048.0], [99.6, 2072.0], [99.7, 2126.0], [99.8, 2270.0], [99.9, 2830.0]], "isOverall": false, "label": "Plot and download", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 720.0, "series": [{"data": [[600.0, 585.0], [700.0, 325.0], [800.0, 226.0], [900.0, 137.0], [1000.0, 109.0], [1100.0, 68.0], [1200.0, 48.0], [1300.0, 38.0], [1400.0, 27.0], [1500.0, 18.0], [1600.0, 17.0], [1700.0, 9.0], [1800.0, 2.0], [1900.0, 4.0], [2000.0, 7.0], [2100.0, 3.0], [2300.0, 1.0], [2200.0, 2.0], [2500.0, 1.0], [2800.0, 1.0], [200.0, 5.0], [3500.0, 1.0], [3600.0, 1.0], [300.0, 156.0], [400.0, 489.0], [500.0, 720.0]], "isOverall": false, "label": "Plot and download", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 67.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2278.0, "series": [{"data": [[0.0, 655.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2278.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 67.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 18.96057347670251, "minX": 1.64618702E12, "maxY": 38.82178217821783, "series": [{"data": [[1.64618705E12, 20.671328671328673], [1.64618704E12, 18.96057347670251], [1.64618707E12, 19.864864864864867], [1.64618706E12, 20.127659574468087], [1.64618709E12, 19.654952076677326], [1.64618708E12, 19.426116838487964], [1.64618711E12, 30.350282485875706], [1.6461871E12, 22.961038961038977], [1.64618712E12, 38.82178217821783], [1.64618703E12, 19.172161172161168], [1.64618702E12, 22.013824884792616]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.64618712E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 298.0, "minX": 1.0, "maxY": 2270.0, "series": [{"data": [[2.0, 2270.0], [3.0, 1508.0], [4.0, 1645.0], [5.0, 1431.0], [6.0, 1412.0], [9.0, 1474.3333333333333], [10.0, 1568.0], [11.0, 298.0], [12.0, 611.8000000000001], [13.0, 457.6333333333334], [14.0, 501.24637681159413], [15.0, 523.7524752475248], [16.0, 529.2499999999999], [17.0, 554.8140703517589], [18.0, 619.3661538461536], [19.0, 622.7564575645761], [20.0, 642.0502283105022], [21.0, 677.4072727272724], [22.0, 707.6190476190473], [23.0, 755.015384615385], [24.0, 733.5085714285718], [25.0, 738.0689655172409], [26.0, 819.3086419753087], [27.0, 820.0465116279069], [28.0, 794.4545454545456], [29.0, 858.3559322033898], [30.0, 813.7272727272726], [31.0, 856.37037037037], [32.0, 898.7241379310348], [33.0, 905.675], [34.0, 904.9200000000001], [35.0, 883.7222222222222], [37.0, 1109.9999999999998], [36.0, 1144.1538461538462], [39.0, 963.6], [38.0, 846.6999999999999], [40.0, 1210.2857142857142], [42.0, 818.0], [43.0, 871.5], [45.0, 1130.0], [44.0, 938.6], [46.0, 1104.1666666666667], [47.0, 1204.0], [49.0, 1158.75], [48.0, 1182.6], [50.0, 1243.25], [51.0, 1390.25], [52.0, 1097.6], [53.0, 1491.0], [54.0, 1231.5], [57.0, 1168.6], [56.0, 1000.0], [59.0, 1633.0], [61.0, 1282.0], [63.0, 1486.0], [62.0, 1369.0], [65.0, 1680.0], [64.0, 1354.0], [1.0, 1394.0]], "isOverall": false, "label": "Plot and download", "isController": false}, {"data": [[22.103333333333364, 694.0963333333337]], "isOverall": false, "label": "Plot and download-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 65.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1706.9, "minX": 1.64618702E12, "maxY": 13593.6, "series": [{"data": [[1.64618705E12, 10982.4], [1.64618704E12, 10713.6], [1.64618707E12, 11366.4], [1.64618706E12, 10828.8], [1.64618709E12, 12019.2], [1.64618708E12, 11174.4], [1.64618711E12, 13593.6], [1.6461871E12, 11827.2], [1.64618712E12, 3878.4], [1.64618703E12, 10483.2], [1.64618702E12, 8332.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64618705E12, 4833.4], [1.64618704E12, 4715.1], [1.64618707E12, 5002.4], [1.64618706E12, 4765.8], [1.64618709E12, 5289.7], [1.64618708E12, 4917.9], [1.64618711E12, 5982.6], [1.6461871E12, 5205.2], [1.64618712E12, 1706.9], [1.64618703E12, 4613.7], [1.64618702E12, 3667.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.64618712E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 601.8306709265173, "minX": 1.64618702E12, "maxY": 1277.1089108910894, "series": [{"data": [[1.64618705E12, 685.902097902098], [1.64618704E12, 630.9534050179218], [1.64618707E12, 641.3445945945949], [1.64618706E12, 656.6702127659574], [1.64618709E12, 601.8306709265173], [1.64618708E12, 607.7422680412379], [1.64618711E12, 813.3050847457628], [1.6461871E12, 679.1266233766233], [1.64618712E12, 1277.1089108910894], [1.64618703E12, 653.9597069597074], [1.64618702E12, 761.4746543778804]], "isOverall": false, "label": "Plot and download", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.64618712E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 601.7859424920124, "minX": 1.64618702E12, "maxY": 1277.089108910891, "series": [{"data": [[1.64618705E12, 685.8671328671325], [1.64618704E12, 630.8853046594984], [1.64618707E12, 641.2567567567569], [1.64618706E12, 656.6028368794331], [1.64618709E12, 601.7859424920124], [1.64618708E12, 607.7113402061851], [1.64618711E12, 813.214689265536], [1.6461871E12, 679.0941558441557], [1.64618712E12, 1277.089108910891], [1.64618703E12, 653.8241758241762], [1.64618702E12, 761.3917050691244]], "isOverall": false, "label": "Plot and download", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.64618712E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.48514851485148514, "minX": 1.64618702E12, "maxY": 1.847926267281107, "series": [{"data": [[1.64618705E12, 0.9545454545454541], [1.64618704E12, 0.813620071684588], [1.64618707E12, 1.0574324324324325], [1.64618706E12, 0.790780141843971], [1.64618709E12, 0.7667731629392972], [1.64618708E12, 0.8728522336769764], [1.64618711E12, 0.6638418079096045], [1.6461871E12, 0.7532467532467535], [1.64618712E12, 0.48514851485148514], [1.64618703E12, 0.7912087912087911], [1.64618702E12, 1.847926267281107]], "isOverall": false, "label": "Plot and download", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.64618712E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 289.0, "minX": 1.64618702E12, "maxY": 3631.0, "series": [{"data": [[1.64618705E12, 3631.0], [1.64618704E12, 1514.0], [1.64618707E12, 1962.0], [1.64618706E12, 1674.0], [1.64618709E12, 1433.0], [1.64618708E12, 1630.0], [1.64618711E12, 2571.0], [1.6461871E12, 1657.0], [1.64618712E12, 2270.0], [1.64618703E12, 2373.0], [1.64618702E12, 3594.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64618705E12, 938.9000000000001], [1.64618704E12, 945.0], [1.64618707E12, 897.6], [1.64618706E12, 957.0], [1.64618709E12, 840.8000000000002], [1.64618708E12, 824.0], [1.64618711E12, 1110.0], [1.6461871E12, 941.1], [1.64618712E12, 1787.0], [1.64618703E12, 1013.2], [1.64618702E12, 1263.0000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64618705E12, 1658.9499999999994], [1.64618704E12, 1390.4], [1.64618707E12, 1297.8399999999992], [1.64618706E12, 1385.7300000000027], [1.64618709E12, 1193.58], [1.64618708E12, 1511.039999999999], [1.64618711E12, 1802.6999999999994], [1.6461871E12, 1552.2800000000002], [1.64618712E12, 2268.88], [1.64618703E12, 1969.9199999999992], [1.64618702E12, 2703.279999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64618705E12, 1099.8999999999999], [1.64618704E12, 1129.0], [1.64618707E12, 1106.15], [1.64618706E12, 1061.1999999999996], [1.64618709E12, 1020.0], [1.64618708E12, 1023.9999999999997], [1.64618711E12, 1351.25], [1.6461871E12, 1150.4000000000003], [1.64618712E12, 2047.3], [1.64618703E12, 1295.2000000000003], [1.64618702E12, 1461.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64618705E12, 324.0], [1.64618704E12, 301.0], [1.64618707E12, 314.0], [1.64618706E12, 314.0], [1.64618709E12, 289.0], [1.64618708E12, 315.0], [1.64618711E12, 367.0], [1.6461871E12, 327.0], [1.64618712E12, 544.0], [1.64618703E12, 297.0], [1.64618702E12, 296.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64618705E12, 619.5], [1.64618704E12, 587.0], [1.64618707E12, 594.0], [1.64618706E12, 613.5], [1.64618709E12, 568.0], [1.64618708E12, 552.0], [1.64618711E12, 748.5], [1.6461871E12, 613.0], [1.64618712E12, 1264.0], [1.64618703E12, 579.0], [1.64618702E12, 606.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.64618712E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 507.0, "minX": 8.0, "maxY": 1416.5, "series": [{"data": [[8.0, 1034.5], [32.0, 620.0], [33.0, 571.0], [35.0, 606.0], [36.0, 735.5], [37.0, 694.0], [39.0, 552.0], [38.0, 771.5], [40.0, 1416.5], [42.0, 789.0], [14.0, 507.0], [18.0, 702.0], [19.0, 576.0], [23.0, 581.0], [24.0, 562.0], [25.0, 566.0], [26.0, 615.5], [27.0, 560.0], [28.0, 607.0], [29.0, 600.0], [30.0, 624.0], [31.0, 619.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 506.0, "minX": 8.0, "maxY": 1416.5, "series": [{"data": [[8.0, 1034.5], [32.0, 620.0], [33.0, 571.0], [35.0, 606.0], [36.0, 735.5], [37.0, 694.0], [39.0, 552.0], [38.0, 771.5], [40.0, 1416.5], [42.0, 789.0], [14.0, 506.0], [18.0, 702.0], [19.0, 576.0], [23.0, 581.0], [24.0, 562.0], [25.0, 566.0], [26.0, 615.5], [27.0, 560.0], [28.0, 607.0], [29.0, 599.5], [30.0, 624.0], [31.0, 619.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.6, "minX": 1.64618702E12, "maxY": 36.0, "series": [{"data": [[1.64618705E12, 28.3], [1.64618704E12, 28.0], [1.64618707E12, 29.0], [1.64618706E12, 28.7], [1.64618709E12, 30.7], [1.64618708E12, 29.9], [1.64618711E12, 36.0], [1.6461871E12, 32.1], [1.64618712E12, 6.6], [1.64618703E12, 27.3], [1.64618702E12, 23.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.64618712E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.1, "minX": 1.64618702E12, "maxY": 35.4, "series": [{"data": [[1.64618705E12, 28.6], [1.64618704E12, 27.9], [1.64618707E12, 29.6], [1.64618706E12, 28.2], [1.64618709E12, 31.3], [1.64618708E12, 29.1], [1.64618711E12, 35.4], [1.6461871E12, 30.8], [1.64618712E12, 10.1], [1.64618703E12, 27.3], [1.64618702E12, 21.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 10000, "maxX": 1.64618712E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.1, "minX": 1.64618702E12, "maxY": 35.4, "series": [{"data": [[1.64618705E12, 28.6], [1.64618704E12, 27.9], [1.64618707E12, 29.6], [1.64618706E12, 28.2], [1.64618709E12, 31.3], [1.64618708E12, 29.1], [1.64618711E12, 35.4], [1.6461871E12, 30.8], [1.64618712E12, 10.1], [1.64618703E12, 27.3], [1.64618702E12, 21.7]], "isOverall": false, "label": "Plot and download-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.64618712E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.1, "minX": 1.64618702E12, "maxY": 35.4, "series": [{"data": [[1.64618705E12, 28.6], [1.64618704E12, 27.9], [1.64618707E12, 29.6], [1.64618706E12, 28.2], [1.64618709E12, 31.3], [1.64618708E12, 29.1], [1.64618711E12, 35.4], [1.6461871E12, 30.8], [1.64618712E12, 10.1], [1.64618703E12, 27.3], [1.64618702E12, 21.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 10000, "maxX": 1.64618712E12, "title": "Total Transactions Per Second"}},
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

