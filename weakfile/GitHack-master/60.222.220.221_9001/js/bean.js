//修改转码的对象
//导播
function PlayGuidItem(liveList,transfId)
{
    this.liveList = liveList;
    this.transfId = transfId;
}
//轮播
function PlayWhileItem(mvlist,transfId,type,mode)
{
    this.mvlist = mvlist;
    this.transfId = transfId;
    this.type = type;
    this.mode = mode;
}
function Urls(url)
{
    this.url = url;
}
function PullStream(url,urls,transfId,engineId)
{
    this.url = url;
    this.urls = urls;
    this.transfId = transfId;
    this.engineId = engineId;
}

function PullStreamNoUrls(url,transfId,engineId)
{
    this.url = url;
    this.transfId = transfId;
    this.engineId = engineId;
}

//合并   ---add_concat_media.html
function Concat(transfId,outFile,items,waterMark,waterWidth,waterHeight,typeId)
{
    this.transfId = transfId;
    this.outFile = outFile;
    this.items = items;
    this.waterMark = waterMark;
    this.waterWidth = waterWidth;
    this.waterHeight = waterHeight;
    this.typeId = typeId;
}
function Items(startTime,endTime,url)
{
    this.startTime = startTime;
    this.endTime = endTime;
    this.url = url;
}

//子流   ---live_substream.html
function VPrarm(preset,tune,profile)
{
    this.preset = preset;
    this.tune = tune;
    this.profile = profile;
}
function OutputStreamInfo(name,liveStatus,transfId)
{
    this.name = name;
    this.liveStatus = liveStatus;
    this.transfId = transfId;
}

//预告
function Tshift(name,time,description)
{
    this.name = name;
    this.time = time;
    this.description = description;
}

//记录保留时间
function RecordDays(FlowRecordTime)
{
    this.FlowRecordTime = FlowRecordTime;
}

//预览配置
function Preview(transfId)
{
    this.transfId = transfId;
}

//开始转码   ---start_transfer.html
function transfer(transfId,startTime,endTime,url,outFile,waterMark,waterWidth,waterHeight,typeId)
{
    this.transfId = transfId;
    this.startTime = startTime;
    this.endTime = endTime;
    this.url = url;
    this.outFile = outFile;
    this.waterMark = waterMark;
    this.waterWidth = waterWidth;
    this.waterHeight = waterHeight;
    this.typeId = typeId;
}

//媒体库分类   ---add_media_category.html
//  ---edit_media_category.html
//点播分类  ---add_vod_category.html
//添加媒体到点播分类   ---addMediaToCategory.html
function VodCategoryInfo(name,visible)
{
    this.name = name;
    this.visible = visible;
}
//  ---edit_vod_category.html
function VodCategory(id,name,visible)
{
    this.name = name;
    this.id = id;
    this.visible = visible;
}

function VodCategoryInfoLevel(name,visible,bPublic,vipLevel,vodPath)
{
    this.name = name;
    this.visible = visible;
    this.bPublic = bPublic;
    this.vipLevel = vipLevel;
    this.vodPath = vodPath;
}

function VodCategoryLevel(id,name,visible,bPublic,vipLevel)
{
    this.name = name;
    this.id = id;
    this.visible = visible;
    this.bPublic = bPublic;
    this.vipLevel = vipLevel;
}

function VodCategoryLevelEdit(id,name,visible,bPublic,vipLevel,vodPath)
{
    this.name = name;
    this.id = id;
    this.visible = visible;
    this.bPublic = bPublic;
    this.vipLevel = vipLevel;
    this.vodPath =vodPath;
}

function MediaToCategory(name,visible,files)
{
    this.name = name;
    this.visible = visible;
    this.files = files;
}

function MediaToCategoryLevel(name,visible,files,bPublic,vipLevel)
{
    this.name = name;
    this.visible = visible;
    this.files = files;
    this.bPublic = bPublic;
    this.vipLevel = vipLevel;
}

function MediaToCategoryVod(name,visible,files,bPublic,vipLevel)
{
    this.name = name;
    this.visible = visible;
    this.files = files;
    this.bPublic = bPublic;
    this.vipLevel = vipLevel;
}

//新闻公告   ---add_notice.html
function NoticeInfo(title,txt)
{
    this.title = title;
    this.txt = txt;
}
//   ---edit_notice.html
function Notice(title,createTime,txt)
{
    this.title = title;
    this.createTime = createTime;
    this.txt = txt;
}

//用户   ---add_user.html
function UserInfo(type,user,alias,password,email,phone)
{
    this.type = type;
    this.user = user;
    this.alias = alias;
    this.password = password;
    this.email = email;
    this.phone = phone;
}

function User(alias,password,email,phone)
{
    this.alias = alias;
    this.password = password;
    this.email = email;
    this.phone = phone;
}

//媒体库 查询点播视频  ---media_librery.html
function File(find,currentPage,pageCount)
{
    this.find = find;
    this.currentPage = currentPage;
    this.pageCount = pageCount;
}
function Path(name)
{
    this.name = name;
}
function MediaObject(fileId,description)
{
    this.fileId = fileId;
    this.description = description;
}
function CutMedia(fileId,name)
{
    this.fileId = fileId;
    this.name = name;
}

function MoveMedia(fileId)
{
    this.fileId = fileId;
}

//点播tree加载   ---vod_tree.html
function SubCategory1(id,name,url,checked)
{
    this.id = id;
    this.name = name;
    this.url = url;
    this.checked = checked;
}
function MainCategory1(id,name,subNames,url,checked)
{
    this.id = id;
    this.name = name;
    this.subNames = subNames;
    this.url = url;
    this.checked = checked;
}
function MainCategoryOpen1(id,name,open,subNames,url,checked)
{
    this.id = id;
    this.name = name;
    this.open = open;
    this.subNames = subNames;
    this.url = url;
    this.checked = checked;
}

function SubCategory2(id,name,url,checked,chkDisabled)
{
    this.id = id;
    this.name = name;
    this.url = url;
    this.checked = checked;
    this.chkDisabled = chkDisabled;
}
function MainCategory2(id,name,subNames,url,checked,chkDisabled)
{
    this.id = id;
    this.name = name;
    this.subNames = subNames;
    this.url = url;
    this.checked = checked;
    this.chkDisabled = chkDisabled;
}
function MainCategoryOpen2(id,name,open,subNames,url,checked,chkDisabled) {
    this.id = id;
    this.name = name;
    this.open = open;
    this.subNames = subNames;
    this.url = url;
    this.checked = checked;
    this.chkDisabled = chkDisabled;
}


function SubCategory(name,url,bPublic,vipLevel)
{
    this.name = name;
    this.url = url;
    this.bPublic = bPublic;
    this.vipLevel = vipLevel;
}
function MainCategory(name,subNames,url)
{
    this.name = name;
    this.subNames = subNames;
    this.url = url;
}
function MainCategoryOpen(name,open,subNames,url)
{
    this.name = name;
    this.open = open;
    this.subNames = subNames;
    this.url = url;
}

function RecordCategory(name,url)
{
    this.name = name;
    this.url  = url;
}

function RecordCategoryOpen(name,open,url)
{
    this.name = name;
    this.open = open;
    this.url  = url;
}


//数据库tree加载
function MainCategoryMedia(id,name,url)
{
    this.id = id;
    this.name = name;
    this.url = url;
}
function MainCategoryOpenMedia(name,open,url)
{
    this.name = name;
    this.open = open;
    this.url = url;
}

//回播   ---add_back_live.html
function LiveChannelInfoBack(alias,appName,autoClosePull,dataPath,delaySeconds,enableHLS,hlsStatus,enableTS,tsStatus,lazyPull,lazyPush,liveName,push,right,tsAddress,playback,keepPlaybackDays,pullStream,format,playDeleay,publishStatus)
{
    this.alias = alias;
    this.appName = appName;
    this.autoClosePull = autoClosePull;
    this.dataPath = dataPath;
    this.delaySeconds = delaySeconds;
    this.enableHLS = enableHLS;
    this.hlsStatus = hlsStatus;
    this.enableTS = enableTS;
    this.tsStatus = tsStatus;
    this.playback = playback;
    this.keepPlaybackDays = keepPlaybackDays;
    this.lazyPull = lazyPull;
    this.lazyPush = lazyPush;
    this.name = liveName;
    this.push = push;
    this.right = right;
    this.tsAddress = tsAddress;
    this.pullStream = pullStream;
    this.format = format;
    this.playDeleay = playDeleay;
    this.publishStatus = publishStatus;
}
function LiveChannelInfoBackEdit(alias,appName,autoClosePull,dataPath,delaySeconds,enableHLS,enableRTP,enableTS,flvKeyframe,format,forwardUrls,hlsStatus,id,intervalTime,ip,keepPlaybackDays,lazyPull,lazyPush,liveProperty,liveStatus,
                         liveName,outputMode,outputs,playback,publishStatus,push,recordAppend,recordEnabled,recordStatus,recordType,replaces,right,splitFileSize,timeToApend,tsAddress,tsStatus,type,listItem,pullStream,transferInfo,playDeleay)
{
    this.alias = alias;
    this.appName = appName;
    this.autoClosePull = autoClosePull;
    this.dataPath = dataPath;
    this.delaySeconds = delaySeconds;
    this.enableHLS = enableHLS;
    this.enableRTP = enableRTP;
    this.enableTS = enableTS;
    this.flvKeyframe = flvKeyframe;
    this.format = format;
    this.forwardUrls = forwardUrls;
    this.hlsStatus = hlsStatus;
    this.id = id;
    this.intervalTime = intervalTime;
    this.ip = ip;
    this.keepPlaybackDays = keepPlaybackDays;
    this.lazyPull = lazyPull;
    this.lazyPush = lazyPush;
    this.liveProperty = liveProperty;
    this.liveStatus = liveStatus;
    this.name = liveName;
    this.outputMode = outputMode;
    this.outputs = outputs;
    this.playback = playback;
    this.publishStatus = publishStatus;
    this.push = push;
    this.recordAppend = recordAppend;
    this.recordEnabled = recordEnabled;
    this.recordStatus = recordStatus;
    this.recordType = recordType;
    this.replaces = replaces;
    this.right = right;
    this.splitFileSize = splitFileSize;
    this.timeToApend = timeToApend;
    this.tsAddress = tsAddress;
    this.tsStatus = tsStatus;
    this.type = type;
    this.listItem = listItem;
    this.pullStream = pullStream;
    this.transferInfo = transferInfo;
    this.playDeleay = playDeleay;
}
function VodInfoBack(appName,alias,dataPath,sso,enableAdv)
{
    this.appName = appName;
    this.dataPath = dataPath;
    this.alias = alias;
    this.sso = sso;
    this.enableAdv = enableAdv;
}

//添加终端组管理   ---add_group_manager.html
function GroupInfo(groupName,liveId,subtitle)
{
    this.groupName = groupName;
    this.liveId = liveId;
    this.subtitle = subtitle;
}
function GroupIp(ip,alias)
{
    this.ip = ip;
    this.alias = alias;
}
function SubTiltle(word,time)
{
    this.word = word;
    this.time = time;
}

function GroupInfoEdit(groupName,liveId,devType,subtitle)
{
    this.groupName = groupName;
    this.liveId = liveId;
    this.devType = devType;
    this.subtitle = subtitle;
}



//导播   ---add_guid_live.html
function LiveChannelInfoGuid(alias,appName,dataPath,delaySeconds,enableHLS,enableTS,flvKeyframe,format,hlsStatus,intervalTime,keepPlaybackDays,liveProperty,
                         liveName,outputMode,recordEnabled,recordType,right,splitFileSize,timeToApend,tsAddress,tsStatus,listItem)
{
    this.alias = alias;
    this.appName = appName;
    this.dataPath = dataPath;
    this.delaySeconds = delaySeconds;
    this.enableHLS = enableHLS;
    this.enableTS = enableTS;
    this.flvKeyframe = flvKeyframe;
    this.format = format;
    this.hlsStatus = hlsStatus;
    this.intervalTime = intervalTime;
    this.keepPlaybackDays = keepPlaybackDays;
    this.liveProperty = liveProperty;
    this.name = liveName;
    this.outputMode = outputMode;
    this.recordEnabled = recordEnabled;
    this.recordType = recordType;
    this.right = right;
    this.splitFileSize = splitFileSize;
    this.timeToApend = timeToApend;
    this.tsAddress = tsAddress;
    this.tsStatus = tsStatus;
    this.listItem = listItem;
}
function VodInfoGuid(appName,alias,dataPath,sso,enableAdv)
{
    this.appName = appName;
    this.dataPath = dataPath;
    this.alias = alias;
    this.sso = sso;
    this.enableAdv = enableAdv;
}


//导播2   ---add_guid_play.html
function ItemGuid(id,name,appName,liveName)
{
    this.id = id;
    this.name = name;
    this.appName = appName;
    this.liveName = liveName;
}
function LiveChannelInfoGuidInfo(alias,appName,autoClosePull,dataPath,delaySeconds,enableHLS,enableRTP,enableTS,flvKeyframe,format,forwardUrls,hlsStatus,id,intervalTime,ip,keepPlaybackDays,lazyPull,liveProperty,liveStatus,
                         liveName,outputMode,outputs,playback,publishStatus,push,recordEnabled,recordStatus,recordType,replaces,right,splitFileSize,timeToApend,tsAddress,tsStatus,type,listItem,pullStream,transferInfo)
{
    this.alias = alias;
    this.appName = appName;
    this.autoClosePull = autoClosePull;
    this.dataPath = dataPath;
    this.delaySeconds = delaySeconds;
    this.enableHLS = enableHLS;
    this.enableRTP = enableRTP;
    this.enableTS = enableTS;
    this.flvKeyframe = flvKeyframe;
    this.format = format;
    this.forwardUrls = forwardUrls;
    this.hlsStatus = hlsStatus;
    this.id = id;
    this.intervalTime = intervalTime;
    this.ip = ip;
    this.keepPlaybackDays = keepPlaybackDays;
    this.lazyPull = lazyPull;
    this.liveProperty = liveProperty;
    this.liveStatus = liveStatus;
    this.name = liveName;
    this.outputMode = outputMode;
    this.outputs = outputs;
    this.playback = playback;
    this.publishStatus = publishStatus;
    this.push = push;
    this.recordEnabled = recordEnabled;
    this.recordStatus = recordStatus;
    this.recordType = recordType;
    this.replaces = replaces;
    this.right = right;
    this.splitFileSize = splitFileSize;
    this.timeToApend = timeToApend;
    this.tsAddress = tsAddress;
    this.tsStatus = tsStatus;
    this.type = type;
    this.listItem = listItem;
    this.pullStream = pullStream;
    this.transferInfo = transferInfo;
}
function LiveChannelInfoGuidEdit(alias,appName,autoClosePull,dataPath,delaySeconds,enableHLS,enableRTP,enableTS,flvKeyframe,format,forwardUrls,hlsStatus,id,intervalTime,ip,keepPlaybackDays,lazyPull,liveProperty,liveStatus,
                         liveName,outputMode,outputs,playback,publishStatus,push,recordEnabled,recordStatus,recordType,replaces,right,splitFileSize,timeToApend,tsAddress,tsStatus,type,listItem,pullStream,transferInfo)
{
    this.alias = alias;
    this.appName = appName;
    this.autoClosePull = autoClosePull;
    this.dataPath = dataPath;
    this.delaySeconds = delaySeconds;
    this.enableHLS = enableHLS;
    this.enableRTP = enableRTP;
    this.enableTS = enableTS;
    this.flvKeyframe = flvKeyframe;
    this.format = format;
    this.forwardUrls = forwardUrls;
    this.hlsStatus = hlsStatus;
    this.id = id;
    this.intervalTime = intervalTime;
    this.ip = ip;
    this.keepPlaybackDays = keepPlaybackDays;
    this.lazyPull = lazyPull;
    this.liveProperty = liveProperty;
    this.liveStatus = liveStatus;
    this.name = liveName;
    this.outputMode = outputMode;
    this.outputs = outputs;
    this.playback = playback;
    this.publishStatus = publishStatus;
    this.push = push;
    this.recordEnabled = recordEnabled;
    this.recordStatus = recordStatus;
    this.recordType = recordType;
    this.replaces = replaces;
    this.right = right;
    this.splitFileSize = splitFileSize;
    this.timeToApend = timeToApend;
    this.tsAddress = tsAddress;
    this.tsStatus = tsStatus;
    this.type = type;
    this.listItem = listItem;
    this.pullStream = pullStream;
    this.transferInfo = transferInfo;
}
//导播   ---live_guid_play.html
function LiveList(id,name,appName,liveName)
{
    this.id = id;
    this.name = name;
    this.appName = appName;
    this.liveName = liveName;
}
function SendObject(appName,liveName,id)
{
    this.appName = appName;
    this.liveName = liveName;
    this.id = id;
}
function LiveChannelInfoGuidPlay(alias,appName,autoClosePull,dataPath,delaySeconds,enableHLS,enableRTP,enableTS,flvKeyframe,format,forwardUrls,hlsStatus,id,intervalTime,ip,keepPlaybackDays,lazyPull,liveProperty,liveStatus,
                                 liveName,outputMode,outputs,playback,publishStatus,push,recordAppend,recordEnabled,recordStatus,recordType,replaces,right,splitFileSize,timeToApend,tsAddress,tsStatus,type,listItem,pullStream,transferInfo)
{
    this.alias = alias;
    this.appName = appName;
    this.autoClosePull = autoClosePull;
    this.dataPath = dataPath;
    this.delaySeconds = delaySeconds;
    this.enableHLS = enableHLS;
    this.enableRTP = enableRTP;
    this.enableTS = enableTS;
    this.flvKeyframe = flvKeyframe;
    this.format = format;
    this.forwardUrls = forwardUrls;
    this.hlsStatus = hlsStatus;
    this.id = id;
    this.intervalTime = intervalTime;
    this.ip = ip;
    this.keepPlaybackDays = keepPlaybackDays;
    this.lazyPull = lazyPull;
    this.liveProperty = liveProperty;
    this.liveStatus = liveStatus;
    this.name = liveName;
    this.outputMode = outputMode;
    this.outputs = outputs;
    this.playback = playback;
    this.publishStatus = publishStatus;
    this.push = push;
    this.recordAppend = recordAppend;
    this.recordEnabled = recordEnabled;
    this.recordStatus = recordStatus;
    this.recordType = recordType;
    this.replaces = replaces;
    this.right = right;
    this.splitFileSize = splitFileSize;
    this.timeToApend = timeToApend;
    this.tsAddress = tsAddress;
    this.tsStatus = tsStatus;
    this.type = type;
    this.listItem = listItem;
    this.pullStream = pullStream;
    this.transferInfo = transferInfo;
}

//直播   ---add_live.html
function LiveChannelInfo( alias,appName,autoClosePull,dataPath,delaySeconds,enableHLS,enableRTP,enableTS,flvKeyframe,format,forwardUrls,hlsStatus,intervalTime,ip,keepPlaybackDays,lazyPull,lazyPush,liveProperty,liveStatus,
                          liveName,outputMode,outputs,playback,publishStatus,push,recordEnabled,recordStatus,recordType,replaces,right,splitFileSize,timeToApend,tsAddress,tsStatus,type,items,pullStream,transferInfo,playDeleay)
{
    this.alias = alias;
    this.appName = appName;
    this.autoClosePull = autoClosePull;
    this.dataPath = dataPath;
    this.delaySeconds = delaySeconds;
    this.enableHLS = enableHLS;
    this.enableRTP = enableRTP;
    this.enableTS = enableTS;
    this.flvKeyframe = flvKeyframe;
    this.format = format;
    this.forwardUrls = forwardUrls;
    this.hlsStatus = hlsStatus;
    this.intervalTime = intervalTime;
    this.ip = ip;
    this.keepPlaybackDays = keepPlaybackDays;
    this.lazyPull = lazyPull;
    this.lazyPush = lazyPush;
    this.liveProperty = liveProperty;
    this.liveStatus = liveStatus;
    this.name = liveName;
    this.outputMode = outputMode;
    this.outputs = outputs;
    this.playback = playback;
    this.publishStatus = publishStatus;
    this.push = push;
    this.recordEnabled = recordEnabled;
    this.recordStatus = recordStatus;
    this.recordType = recordType;
    this.replaces = replaces;
    this.right = right;
    this.splitFileSize = splitFileSize;
    this.timeToApend = timeToApend;
    this.tsAddress = tsAddress;
    this.tsStatus = tsStatus;
    this.type = type;
    this.items = items;
    this.pullStream = pullStream;
    this.transferInfo = transferInfo;
    this.playDeleay = playDeleay;
}
function VodInfo(appName,alias,dataPath,sso,enableAdv)
{
    this.appName = appName;
    this.dataPath = dataPath;
    this.alias = alias;
    this.sso = sso;
    this.enableAdv = enableAdv;
}
//   ---edit_live.html
function LiveChannelInfoEdit(alias,appName,autoClosePull,dataPath,delaySeconds,enableHLS,enableRTP,enableTS,flvKeyframe,format,forwardUrls,hlsStatus,id,intervalTime,ip,keepPlaybackDays,lazyPull,lazyPush,liveProperty,liveStatus,
                         liveName,outputMode,outputs,playback,publishStatus,push,recordEnabled,recordStatus,recordType,replaces,right,splitFileSize,timeToApend,tsAddress,tsStatus,type,listItem,pullStream,transferInfo,playDeleay)
{
    this.alias = alias;
    this.appName = appName;
    this.autoClosePull = autoClosePull;
    this.dataPath = dataPath;
    this.delaySeconds = delaySeconds;
    this.enableHLS = enableHLS;
    this.enableRTP = enableRTP;
    this.enableTS = enableTS;
    this.flvKeyframe = flvKeyframe;
    this.format = format;
    this.forwardUrls = forwardUrls;
    this.hlsStatus = hlsStatus;
    this.id = id;
    this.intervalTime = intervalTime;
    this.ip = ip;
    this.keepPlaybackDays = keepPlaybackDays;
    this.lazyPull = lazyPull;
    this.lazyPush = lazyPush;
    this.liveProperty = liveProperty;
    this.liveStatus = liveStatus;
    this.name = liveName;
    this.outputMode = outputMode;
    this.outputs = outputs;
    this.playback = playback;
    this.publishStatus = publishStatus;
    this.push = push;
    this.recordEnabled = recordEnabled;
    this.recordStatus = recordStatus;
    this.recordType = recordType;
    this.replaces = replaces;
    this.right = right;
    this.splitFileSize = splitFileSize;
    this.timeToApend = timeToApend;
    this.tsAddress = tsAddress;
    this.tsStatus = tsStatus;
    this.type = type;
    this.listItem = listItem;
    this.pullStream = pullStream;
    this.transferInfo = transferInfo;
    this.playDeleay = playDeleay;
}


function LiveChannelInfoWhile(alias,appName,dataPath,enableHLS,hlsStatus,enableTS,tsStatus,format,name,right,tsAddress,listItem)
{
    this.alias = alias;
    this.appName = appName;
    this.dataPath = dataPath;
    this.enableHLS = enableHLS;
    this.hlsStatus = hlsStatus;
    this.enableTS = enableTS;
    this.tsStatus = tsStatus;
    this.format = format;
    this.name = name;
    this.right = right;
    this.tsAddress = tsAddress;
    this.listItem = listItem;
}
function VodInfoWhile(appName,alias,dataPath,sso,enableAdv)
{
    this.appName = appName;
    this.dataPath = dataPath;
    this.alias = alias;
    this.sso = sso;
    this.enableAdv = enableAdv;
}

//轮博任务   ---add_while_play_list.html
//轮播多列表对象
function MvList(listId,name,startTime,stopTime,items)
{
    this.listId = listId;
    this.name = name;
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.items = items;
}
//轮播单列表对象
//添加是使用
function MvListTime(week,date,dayLoop,items,listId)
{
    this.week = week;
    this.date = date;
    this.dayLoop = dayLoop;
    this.items = items;
    this.listId = listId;
}
//编辑时使用
function MvListTime_noId(week,date,dayLoop,items)
{
    this.week = week;
    this.date = date;
    this.dayLoop = dayLoop;
    this.items = items;
}


function ItemsWhilePlay(id,name,type,value,duration)
{
    this.id = id;
    this.name = name;
    this.type = type;
    this.value = value;
    this.duration = duration;
}

function ItemsWhilePlayInfo(id,name,type,value,duration,startTime,stopTime)
{
    this.id = id;
    this.name = name;
    this.type = type;
    this.value = value;
    this.duration = duration;
    this.startTime = startTime;
    this.stopTime = stopTime;
}

function LiveChannelInfoWhilePlay(alias,appName,autoClosePull,dataPath,delaySeconds,enableHLS,enableRTP,enableTS,flvKeyframe,format,forwardUrls,hlsStatus,id,intervalTime,ip,keepPlaybackDays,
                          lazyPull,lazyPush,liveProperty,liveStatus,liveName,outputMode,outputs,playback,publishStatus,push,recordAppend,recordEnabled,
                          recordStatus,recordType,replaces,right,splitFileSize,timeToApend,tsAddress,tsStatus,type,listItem,pullStream,transferInfo)
{
    this.alias = alias;
    this.appName = appName;
    this.autoClosePull = autoClosePull;
    this.dataPath = dataPath;
    this.delaySeconds = delaySeconds;
    this.enableHLS = enableHLS;
    this.enableRTP = enableRTP;
    this.enableTS = enableTS;
    this.flvKeyframe = flvKeyframe;
    this.format = format;
    this.forwardUrls = forwardUrls;
    this.hlsStatus = hlsStatus;
    this.id = id;
    this.intervalTime = intervalTime;
    this.ip = ip;
    this.keepPlaybackDays = keepPlaybackDays;
    this.lazyPull = lazyPull;
    this.lazyPush = lazyPush;
    this.liveProperty = liveProperty;
    this.liveStatus = liveStatus;
    this.name = liveName;
    this.outputMode = outputMode;
    this.outputs = outputs;
    this.playback = playback;
    this.publishStatus = publishStatus;
    this.push = push;
    this.recordAppend = recordAppend;
    this.recordEnabled = recordEnabled;
    this.recordStatus = recordStatus;
    this.recordType = recordType;
    this.replaces = replaces;
    this.right = right;
    this.splitFileSize = splitFileSize;
    this.timeToApend = timeToApend;
    this.tsAddress = tsAddress;
    this.tsStatus = tsStatus;
    this.type = type;
    this.listItem = listItem;
    this.pullStream = pullStream;
    this.transferInfo = transferInfo;
}
function LiveChannelInfoEditWhile(alias,appName,autoClosePull,dataPath,delaySeconds,enableHLS,enableRTP,enableTS,flvKeyframe,format,forwardUrls,hlsStatus,id,intervalTime,ip,keepPlaybackDays,lazyPull,liveProperty,liveStatus,
                         liveName,outputMode,outputs,playback,publishStatus,push,recordAppend,recordEnabled,recordStatus,recordType,replaces,right,splitFileSize,timeToApend,tsAddress,tsStatus,type,listItem,pullStream,transferInfo)
{
    this.alias = alias;
    this.appName = appName;
    this.autoClosePull = autoClosePull;
    this.dataPath = dataPath;
    this.delaySeconds = delaySeconds;
    this.enableHLS = enableHLS;
    this.enableRTP = enableRTP;
    this.enableTS = enableTS;
    this.flvKeyframe = flvKeyframe;
    this.format = format;
    this.forwardUrls = forwardUrls;
    this.hlsStatus = hlsStatus;
    this.id = id;
    this.intervalTime = intervalTime;
    this.ip = ip;
    this.keepPlaybackDays = keepPlaybackDays;
    this.lazyPull = lazyPull;
    this.liveProperty = liveProperty;
    this.liveStatus = liveStatus;
    this.name = liveName;
    this.outputMode = outputMode;
    this.outputs = outputs;
    this.playback = playback;
    this.publishStatus = publishStatus;
    this.push = push;
    this.recordAppend = recordAppend;
    this.recordEnabled = recordEnabled;
    this.recordStatus = recordStatus;
    this.recordType = recordType;
    this.replaces = replaces;
    this.right = right;
    this.splitFileSize = splitFileSize;
    this.timeToApend = timeToApend;
    this.tsAddress = tsAddress;
    this.tsStatus = tsStatus;
    this.type = type;
    this.listItem = listItem;
    this.pullStream = pullStream;
    this.transferInfo = transferInfo;
}

function ReplaceFlvInfo(listId,name,startTime,stopTime,items)
{
    this.listId = listId;
    this.name = name;
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.items = items;
}

function ReplaceFlvInfoEdit(name,startTime,stopTime,items)
{
    this.name = name;
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.items = items;
}


function ReplaceItems(id,name,type,value,duration)
{
    this.id = id;
    this.name = name;
    this.type = type;
    this.value = value;
    this.duration = duration;
}

//添加字幕
function GetDevList(action,devType)
{
    this.action = action;
    this.devType = devType;
}
function Enable(mac,ip,devType,alias,subtitle)
{
    this.mac = mac;
    this.ip = ip;
    this.devType = devType;
    this.alias = alias;
    this.subtitle = subtitle;
}

//GroupAll  分组
function GroupAll(mac,ip,bOnline,alias,status)
{
    this.mac = mac;
    this.ip = ip;
    this.bOnline = bOnline;
    this.alias = alias;
    this.status = status;
}

function EnableDevice(list)
{
    this.list = list;
}

//转码   ---add_transfer.html
function TransferInfo(name,width,height,frameRate,vTransfer,vBitRate,gop,aTransfer,sampleRate,aBitRate,channel,vParam)
{
    this.name = name;
    this.width = width;
    this.height = height;
    this.frameRate = frameRate;
    this.vTransfer = vTransfer;
    this.vBitRate = vBitRate;
    this.gop = gop;
    this.aTransfer = aTransfer;
    this.sampleRate = sampleRate;
    this.aBitRate = aBitRate;
    this.channel = channel;
    this.vParam = vParam;
}

//   ---edit_transfer.html
function TransferInfoEdit(id,name,width,height,frameRate,vTransfer,vBitRate,gop,aTransfer,sampleRate,aBitRate,channel,vParam)
{
    this.id = id;
    this.name = name;
    this.width = width;
    this.height = height;
    this.frameRate = frameRate;
    this.vTransfer = vTransfer;
    this.vBitRate = vBitRate;
    this.gop = gop;
    this.aTransfer = aTransfer;
    this.sampleRate = sampleRate;
    this.aBitRate = aBitRate;
    this.channel = channel;
    this.vParam = vParam;
}

//添加设备到组   ---addDeviceToGroup.html
function DeviceGroupInfo(ip,alias,status)
{
    this.ip = ip;
    this.alias = alias;
    this.status = status;
}
function GroupInfoId(groupId,groupName,liveId,item,devType,subtitle)
{
    this.groupId = groupId;
    this.groupName = groupName;
    this.liveId = liveId;
    this.item = item;
    this.devType = devType;
    this.subtitle = subtitle;
}

//机顶盒管理   --apkManager.html
function ProtocolInfo(protocol,bufferEnable,bufferTime)
{
    this.protocol = protocol;
    this.bufferEnable = bufferEnable;
    this.bufferTime = bufferTime;
}

//截图   ---cut_video_image.html
function ItemsCut(items)
{
    this.items = items;
}
function CutImages(url,outFile,startTime,width,height)
{
    this.url = url;
    this.outFile = outFile;
    this.startTime = startTime;
    this.width = width;
    this.height = height;
}

//下载apk   ---download_apk.html
function Custom(action,devType)
{
    this.action = action;
    this.devType = devType;
}

//设置全部编码器
function Encoder(action,devType,ip)
{
    this.action = action;
    this.devType = devType;
    this.ip = ip;
}
function Conf(videoType,profile,size,BR,vBitRate,quality,frameRate,gop,audioType,audioEnable,audioOut,volume,channel,sampleRate,aBitRate)
{
    this.videoType = videoType;
    this.profile = profile;
    this.size = size;
    this.BR = BR;
    this.vBitRate = vBitRate;
    this.quality = quality;
    this.frameRate = frameRate;
    this.gop = gop;
    this.audioType = audioType;
    this.audioEnable = audioEnable;
    this.audioOut = audioOut;
    this.volume = volume;
    this.channel = channel;
    this.sampleRate = sampleRate;
    this.aBitRate = aBitRate;
}
function EncoderConf(action,groupId,devType,conf)
{
    this.action = action;
    this.groupId = groupId;
    this.devType = devType;
    this.conf = conf;
}

//设置流   ---furl_setting.html
function Furl(openEnable,vEnable,aEnable,name,user,password)
{
    this.openEnable = openEnable;
    this.vEnable = vEnable;
    this.aEnable = aEnable;
    this.name = name;
    this.user = user;
    this.password = password;
}

//授权对象   ---gatewayManager.html
function GateWay(action,devType)
{
    this.action = action;
    this.devType = devType;
}

//组列表   --group_list
function IPInfo(ip,alias,status)
{
    this.ip = ip;
    this.alias = alias;
    this.status = status;
}
function NewGroupInfo(groupName,liveId,item,devType)
{
    this.groupName = groupName;
    this.liveId = liveId;
    this.item = item;
    this.devType = devType;
}
function NewGroupInfoSubtitle(groupName,liveId,item,devType,subtitle)
{
    this.groupName = groupName;
    this.liveId = liveId;
    this.item = item;
    this.devType = devType;
    this.subtitle = subtitle;
}

//组管理   ---group_manager.html
function DelGroupInfo(groupId)
{
    this.groupId = groupId;
}

//网络设置
function Address(macaddr,address,netmask,gateway,username,password)
{
    this.macaddr = macaddr;
    this.address = address;
    this.netmask = netmask;
    this.gateway = gateway;
    this.username = username;
    this.password = password;
}

//权限设置   ---license.html
function License(ip,port,mac,name,sex,tel,fax,email,company,webAddr,status)
{
    this.ip = ip;
    this.port = port;
    this.mac = mac;
    this.name = name;
    this.sex = sex;
    this.tel = tel;
    this.fax = fax;
    this.email = email;
    this.company = company;
    this.webAddr = webAddr;
    this.status = status;
}
function LongLicense(ip,port,mac,status)
{
    this.ip = ip;
    this.port = port;
    this.mac = mac;
    this.status = status;
}

//转流   ---live_furls.html
function LiveForwardUrl(url)
{
    this.url = url;
}

//录制文件
function PageInfo(currentPage,pageCount,find,app,startTime,stopTime)
{
    this.currentPage = currentPage;
    this.pageCount = pageCount;
    this.find = find;
    this.app = app;
    this.startTime = startTime;
    this.stopTime = stopTime;
}
function vodInfo1(appName,dataPath)
{
    this.appName = appName;
    this.dataPath = dataPath;
}
function RecordXml(appName,createDate,fileName,liveName,status)
{
    this.appName = appName;
    this.createDate = createDate;
    this.fileName = fileName;
    this.liveName = liveName;
    this.status = status;
}


//轮播频道对象
function LiveChannelInfoWhileDel(alias,appName,autoClosePull,dataPath,delaySeconds,enableHLS,enableRTP,enableTS,flvKeyframe,format,forwardUrls,hlsStatus,id,intervalTime,ip,keepPlaybackDays,lazyPull,liveProperty,liveStatus,
                                 liveName,outputMode,outputs,playback,publishStatus,push,recordAppend,recordEnabled,recordStatus,recordType,replaces,right,splitFileSize,timeToApend,tsAddress,tsStatus,type,listItem,pullStream,transferInfo)
{
    this.alias = alias;
    this.appName = appName;
    this.autoClosePull = autoClosePull;
    this.dataPath = dataPath;
    this.delaySeconds = delaySeconds;
    this.enableHLS = enableHLS;
    this.enableRTP = enableRTP;
    this.enableTS = enableTS;
    this.flvKeyframe = flvKeyframe;
    this.format = format;
    this.forwardUrls = forwardUrls;
    this.hlsStatus = hlsStatus;
    this.id = id;
    this.intervalTime = intervalTime;
    this.ip = ip;
    this.keepPlaybackDays = keepPlaybackDays;
    this.lazyPull = lazyPull;
    this.liveProperty = liveProperty;
    this.liveStatus = liveStatus;
    this.name = liveName;
    this.outputMode = outputMode;
    this.outputs = outputs;
    this.playback = playback;
    this.publishStatus = publishStatus;
    this.push = push;
    this.recordAppend = recordAppend;
    this.recordEnabled = recordEnabled;
    this.recordStatus = recordStatus;
    this.recordType = recordType;
    this.replaces = replaces;
    this.right = right;
    this.splitFileSize = splitFileSize;
    this.timeToApend = timeToApend;
    this.tsAddress = tsAddress;
    this.tsStatus = tsStatus;
    this.type = type;
    this.listItem = listItem;
    this.pullStream = pullStream;
    this.transferInfo = transferInfo;
}

//日志    ---log_list.html
function Log(logCount,logSize,logLevel)
{
    this.logCount = logCount;
    this.logSize = logSize;
    this.logLevel = logLevel;
}

//修改IP地址   ---modifyip.html
function EncoderIp(ip_addr,mac_addr,ip_mask,ip_gateway,version,username,pass)
{
    this.ip_addr = ip_addr;
    this.mac_addr = mac_addr;
    this.ip_mask = ip_mask;
    this.ip_gateway = ip_gateway;
    this.version = version;
    this.username = username;
    this.pass = pass;
}

//点播文件   ---cod_tree_file.html
function Category(name,visible,files,bPublic,vipLevel)
{
    this.name = name;
    this.visible = visible;
    this.files = files;
    this.bPublic = bPublic;
    this.vipLevel = vipLevel;
}
function DeleteCategory(fileId,description)
{
    this.fileId = fileId;
    this.description = description;
}

//参数设置
function ServerStartUp(flvOverHttp_port,port,rtsp_port,http_port,p2p_port,receiveMessageSize,receiveBufferSize,sendBufferSize,tsOverHttp_port,max_buffer_size,http_buffer_size)
{
    this.flvOverHttp_port = flvOverHttp_port;
    this.port = port;
    this.rtsp_port = rtsp_port;
    this.http_port = http_port;
    this.p2p_port = p2p_port;
    this.receiveMessageSize = receiveMessageSize;
    this.receiveBufferSize = receiveBufferSize;
    this.sendBufferSize = sendBufferSize;
    this.tsOverHttp_port = tsOverHttp_port;
    this.max_buffer_size = max_buffer_size;
    this.http_buffer_size = http_buffer_size;
}
function UserConf(user,password)
{
    this.user = user;
    this.password = password;
}
function Auth(rtmp_auth_enable)
{
    this.rtmp_auth_enable = rtmp_auth_enable;
}
function Access(domain,allow)
{
    this.domain = domain;
    this.allow = allow;
}
function Policy(domains,allowIP)
{
    this.domains = domains;
    this.allowIP = allowIP;
}
function SsoAuth(url,headerName)
{
    this.url = url;
    this.headerName = headerName;
}
function Global(duration,slicenum)
{
    this.duration = duration;
    this.slicenum = slicenum;
}
function Email(enable,smtp,port,security,user,password,senderName,senderMail,recver)
{
    this.enable = enable;
    this.smtp = smtp;
    this.port = port;
    this.security = security;
    this.user = user;
    this.password = password;
    this.senderName = senderName;
    this.senderMail = senderMail;
    this.recver = recver;
}
function Record(timeDel,freeSize,timeUpload,action,email)
{
    this.timeDel = timeDel;
    this.freeSize = freeSize;
    this.timeUpload = timeUpload;
    this.action = action;
    this.email = email
}
function Web(httpUrl,httpEnable,ftpUrl,ftpEnable,uploadDel,rateLimite)
{
    this.httpUrl = httpUrl;
    this.httpEnable = httpEnable;
    this.ftpUrl = ftpUrl;
    this.ftpEnable = ftpEnable;
    this.uploadDel = uploadDel;
    this.rateLimite = rateLimite;
}
function TimeLiveInfo(day,task)
{
    this.day = day;
    this.task = task;
}
function TaskInfo(start,stop)
{
    this.start = start;
    this.stop = stop;
}
function ThumbInfo(type,size)
{
    this.type = type;
    this.size = size;
}
function ComPathTibleFMS(compatibileFMS)
{
    this.compatibileFMS = compatibileFMS;
}

function TimeRestart(time)
{
    this.time = time;
}
function Cloud(host,port,path,autoUpdate)
{
    this.host = host;
    this.port = port;
    this.path = path;
    this.autoUpdate = autoUpdate;
}
function SmoothInfo(rtmp,rtsp,http,ts,time)
{
    this.rtmp = rtmp;
    this.rtsp = rtsp;
    this.http = http;
    this.ts = ts;
    this.time = time;
}

function DelMediaInfo(fileId)
{
    this.fileId = fileId;
}

function FocusVod(fileId,flags,status)
{
    this.fileId = fileId;
    this.flags = flags;
    this.status = status;
}
function HotVod(fileId,flags,status)
{
    this.fileId = fileId;
    this.flags = flags;
    this.status = status;
}

function BeatTm(beatTM)
{
    this.beatTM = beatTM;
}

function DisConnectUserInfo(id)
{
    this.id = id;
}

//time 持续时间
//startTime 开始时间
function SubTitleApkAll(word,wordSize,wordColor,startTime,time)
{
    this.word = word;
    this.wordSize = wordSize;
    this.wordColor = wordColor;
    this.startTime = startTime;
    this.time = time;
}

function ApkSubTitle(groups,word,wordSize,wordColor,startTime,time)
{
    this.groups = groups;
    this.word = word;
    this.wordSize = wordSize;
    this.wordColor = wordColor;
    this.startTime = startTime;
    this.time = time;
}


function GetWhileTaskInfo(startTime,files,liveId,date)
{
    this.startTime = startTime;
    this.files = files;
    this.liveId = liveId;
    this.date = date;
}

function OnvifSet(username,password,timeout)
{
    this.username = username;
    this.password = password;
    this.timeout = timeout;
}

function GotoStart(deviceIp,ProfileToken,dwPTZCommand,speed)
{
    this.deviceIp = deviceIp;
    this.ProfileToken = ProfileToken;
    this.dwPTZCommand = dwPTZCommand;//int
    this.speed = speed;//int
}

function GotoStop(deviceIp,ProfileToken)
{
    this.deviceIp = deviceIp;
    this.ProfileToken = ProfileToken;
}

function PresetInfo(deviceIp,ProfileToken,PresetName,PresetToken)
{
    this.deviceIp = deviceIp;
    this.ProfileToken = ProfileToken;
    this.PresetName = PresetName;
    this.PresetToken = PresetToken;
}

function PresetStartInfo(deviceIp,ProfileToken,PresetToken)
{
    this.deviceIp = deviceIp;
    this.ProfileToken = ProfileToken;
    this.PresetToken = PresetToken;
}

function OnvifImageInfo(brightness,contrast,saturation,sharpness)
{
    this.brightness = brightness;
    this.contrast = contrast;
    this.saturation = saturation;
    this.sharpness = sharpness;
}

function FoucsInfo(deviceIp,VSourceToken)
{
    this.deviceIp = deviceIp;
    this.VSourceToken = deviceIp;
}

function FoucsSpeedInfo(deviceIp,VSourceToken,speed)
{
    this.deviceIp = deviceIp;
    this.VSourceToken = deviceIp;
    this.speed =speed;
}

function OnvifCategory(name,Profile,url)
{
    this.name = name;
    this.Profile = Profile;
    this.url = url;
}

function OnvifSubCategory(name,url)
{
    this.name = name;
    this.url = url;
}



String.prototype.replaceAll  = function(s1,s2){
    return this.replace(new RegExp(s1,"gm"),s2);
}

function replace_url(url)
{
    var host = window.location.hostname;
    var before = url.substr(0,url.indexOf("//")+2);
    var after = "";

    if(url.substring(before.length).lastIndexOf(":") != -1)
    {
        after = url.substr(url.lastIndexOf(":"));
    }
    else
    {
        var temp = url.substring(before.length);
        after = temp.substring(temp.indexOf("/"));
    }

    return (before+host+after);
}





