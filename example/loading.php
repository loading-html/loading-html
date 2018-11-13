<?php
// sleep(5);
sleep(1);
$data=<<<EOF
<p>
我想你 我想你 我每天想你 I Miss U So&nbsp;<br/>我白天想你 黑夜里想你Your Memory Just Won&#39;t Let Me Go&nbsp;<br/>我爱你 我爱你 我永远爱你 I Love U So&nbsp;<br/>我昨天爱你 明天还爱你Your Memory Just Won&#39;t Let Go&nbsp;<br/><br/>我以为早已把你忘掉 忘掉你所有的好<br/>离开的那天 说不出再见<br/>所有的回忆 都那么美丽<br/>在想你的漩涡里面<br/><br/>我想你 我想你 我不能不想你 I Miss U So&nbsp;<br/>开始太美好 结局太潦草 只留下了爱的味道&nbsp;<br/>我爱你 我爱你 我不能不爱你 I Love U So&nbsp;<br/>你对我太好 错过才知道 我还欠你一个拥抱&nbsp;<br/><br/>记得你身上那种味道 还有微翘的嘴角<br/>对你少关心 也带着泪光微笑<br/>当啤酒喝掉 最后才明了&nbsp;<br/>你对我有多么重要&nbsp;<br/><br/>我想你 我想你 我不能不想你 I Miss U So&nbsp;<br/>开始太美好 结局太潦草 只留下了爱的味道&nbsp;<br/>我爱你 我爱你 我不能不爱你 I Love U So&nbsp;<br/>你对我太好 错过才知道 我还欠你一个拥抱&nbsp;<br/><br/>我想你 我想你 我每天想你 I Miss U So&nbsp;<br/>我白天想你 黑夜里想你Your Memory Just Won&#39;t Let Me Go&nbsp;<br/>我爱你 我爱你 我永远爱你 I Love U So&nbsp;<br/>我昨天爱你 明天还爱你Your Memory Just Won&#39;t Let Go&nbsp;<br/>I MISS YOU
</p>
EOF;
echo json_encode(['status'=>1,'info'=>'加载完成','data'=>$data]);