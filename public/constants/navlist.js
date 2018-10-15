
angular
.module('App')
.constant('NAVLIST', {
  account: {
    nav: {
      code: 'nav-sidebar.account-manage',
      name: '账户权限',
      svg: '#icon-zhanghu'
    },
    subNavs: [
      {
        code: 'nav-sidebar.member-manage',
        state: 'account.member-manage',
        name: '成员管理'
      },
      {
        code: 'nav-sidebar.permission-manage',
        state: 'account.role-permission',
        name: '角色权限'
      },
      {
        code: 'nav-sidebar.sales-manage',
        state: 'account.sales',
        name: '销售组管理'
      },
      {
        code: 'nav-sidebar.tmks-manage',
        state: 'account.tmks',
        name: 'TMK组管理'
      }
    ]
  },
  baseSettings: {
    nav: {
      code: 'nav-sidebar.base-settings',
      name: '基础设置',
      svg: '#icon-jichushezhi'
    },
    subNavs: [
      {
        code: 'nav-sidebar.location-tag-manage',
        state: 'base-settings.location-tags',
        name: '机会城市设置'
      },
      {
        code: 'nav-sidebar.tag-manage',
        state: 'base-settings.tag-settings',
        name: '标签设置'
      },
      {
        code: 'nav-sidebar.school-manage',
        state: 'base-settings.school-manage',
        name: '学校管理'
      },
      {
        code: 'nav-sidebar.company-manage',
        state: 'base-settings.company-manage',
        name: '公司管理'
      },
      {
        code: 'nav-sidebar.industry-manage',
        state: 'base-settings.industry',
        name: '行业管理'
      },
      {
        code: 'nav-sidebar.offer-company',
        state: 'base-settings.offer-company-list',
        name: '保Offer列表'
      }
    ]
  },
  cfCollege: {
    nav: {
      code: 'nav-sidebar.cf-college',
      name: '求职学堂',
      svg: '#icon-edm'
    },
    subNavs: [
      {
        code: 'nav-sidebar.banner-list',
        state: 'cf-college.banner-list',
        name: 'Banner管理'
      },
      {
        code: 'nav-sidebar.activity-list',
        state: 'cf-college.activity-list',
        name: '活动推送'
      },
      {
        code: 'nav-sidebar.position-statistics',
        state: 'cf-college.position-statistics',
        name: '职位数据监控'
      },
      {
        code: 'nav-sidebar.qa-list',
        state: 'cf-college.qa-list',
        name: '弹幕问答管理'
      },
      {
        code: 'nav-sidebar.college-discovery',
        state: 'cf-college.college-discovery',
        name: '求职百科资料'
      },
      {
        code: 'nav-sidebar.college-materials',
        state: 'cf-college.college-materials',
        name: '资料中心'
      },
      {
        code: 'nav-sidebar.college-referral',
        state: 'cf-college.referral-opportunities.list',
        name: '内推机会'
      }
    ]
  },
  coach: {
    nav: {
      code: 'nav-sidebar.coach-manage',
      name: '顾问管理',
      svg: '#icon-guwenguanli'
    },
    subNavs: [
      {
        code: 'nav-sidebar.service-schedule-manage',
        state: 'coach.schedule-manage',
        name: '排班'
      },
      {
        code: 'nav-sidebar.coach-feedback',
        state: 'coach.feedback',
        name: '学员评价'
      }
    ]
  },
  content: {
    nav: {
      code: 'nav-sidebar.content-manage',
      name: '内容管理',
      svg: '#icon-neirongguanli'
    },
    subNavs: [
      {
        code: 'nav-sidebar.article-manage',
        state: 'content.article',
        name: '官网求职干货'
      },
      {
        code: 'nav-sidebar.material-manage',
        state: 'content.material',
        name: '学员中心资料'
      },
      {
        code: 'nav-sidebar.news-manage',
        state: 'content.visitor',
        name: '官网内容管理'
      }
    ]
  },
  courseSchedule: {
    nav: {
      code: 'nav-sidebar.course-and-schedule',
      name: '课务管理',
      svg: '#icon-kechengpaike'
    },
    subNavs: [
      {
        code: 'nav-sidebar.course-manage',
        state: 'course-schedule.course.item.list',
        name: '课程管理'
      },
      {
        code: 'nav-sidebar.course-schedule-manage',
        state: 'course-schedule.standard-schedule.list',
        name: '安排课程'
      },
      {
        code: 'nav-sidebar.preset-schedule',
        state: 'course-schedule.preset',
        name: '申请安排'
      },
      {
        code: 'nav-sidebar.lesson-feedback-manage',
        state: 'course-schedule.lesson-feedback.list',
        name: '课后评价'
      },
      {
        code: 'nav-sidebar.course-rank',
        state: 'course-schedule.course-rank.list',
        name: '授课榜'
      },
      {
        code: 'nav-sidebar.coach-schedule',
        state: 'course-schedule.coach-schedule.list',
        name: '门徒课程'
      }
    ]
  },
  edm: {
    nav: {
      code: 'nav-sidebar.edm',
      name: 'EDM',
      svg: '#icon-edm'
    },
    subNavs: [
      {
        code: 'nav-sidebar.send-email',
        state: 'edm.send-edm',
        name: '发送邮件'
      },
      {
        code: 'nav-sidebar.statistics',
        state: 'edm.statistics',
        name: '发送统计'
      }
    ]
  },
  employer: {
    nav: {
      code: 'nav-sidebar.employer-manage',
      name: '雇主管理',
      svg: '#icon-daoshiguanli',
      state: 'employer.list'
    },
    subNavs: [
    ]
  },
  finance: {
    nav: {
      code: 'nav-sidebar.finance',
      name: '财务 & 对账',
      svg: '#icon-neirongguanli'
    },
    subNavs: [
      {
        code: 'nav-sidebar.baofoo',
        state: 'reconciliation.list',
        name: '宝付对账'
      },
      {
        code: 'nav-sidebar.confirm-payment',
        state: 'reconciliation.confirm-payment',
        name: '到账确认'
      }
    ]
  },
  lead: {
    nav: {
      code: 'nav-sidebar.lead',
      name: '客户管理',
      svg: '#icon-kehuguanli'
    },
    subNavs: [
      {
        code: 'nav-sidebar.lead-public-pool',
        state: 'lead.public-pool',
        name: '公海管理'
      },
      {
        code: 'nav-sidebar.lead-query',
        state: 'lead.query',
        name: '客户查询'
      },
      {
        code: 'nav-sidebar.lead-bulk-import',
        state: 'lead.import-bulk',
        name: '批量导入'
      },
      {
        code: 'nav-sidebar.lead-single-import',
        state: 'lead.single-import',
        name: '单条导入'
      },
      {
        code: 'nav-sidebar.lead-photo-import',
        state: 'lead.photo-import',
        name: '拍照导入'
      },
      {
        code: 'nav-sidebar.lead-assign',
        state: 'lead.assign',
        name: '客户分配'
      },
      {
        code: 'nav-sidebar.lead-assign-tmk',
        state: 'lead.assign-tmk',
        name: '客户分配-TMK'
      }, {
        code: 'nav-sidebar.lead-follow-up',
        state: 'lead.follow-up',
        name: '客户维护'
      },
      {
        code: 'nav-sidebar.lead-screen',
        state: 'lead.follow-up-tmk',
        name: '客户维护-TMK'
      }, {
        code: 'nav-sidebar.lead-completed-deal',
        state: 'lead.completed-deal',
        name: '成单列表'
      },
      {
        code: 'nav-sidebar.lead-sale-report',
        state: 'lead.sale-report',
        name: '销售报表'
      }
    ]
  },
  marketing: {
    nav: {
      code: 'nav-sidebar.marketing',
      name: '市场运营',
      svg: '#icon-shichangyunying'
    },
    subNavs: [
      {
        code: 'nav-sidebar.marketing-source',
        state: 'marketing.source.list',
        name: '渠道管理'
      },
      {
        code: 'nav-sidebar.marketing-traffic',
        state: 'marketing.traffic.list',
        name: '流量监控'
      },
      {
        code: 'nav-sidebar.marketing-form',
        state: 'marketing.form',
        name: '报名订制'
      },
      {
        code: 'nav-sidebar.marketing-share-card',
        state: 'marketing.share-card',
        name: '分享卡活动'
      },
      {
        code: 'nav-sidebar.wechat-auto-reply',
        state: 'marketing.wechat-auto-reply',
        name: '公众号回复'
      },
      {
        code: 'nav-sidebar.operation-gua',
        state: 'marketing.operation-gua',
        name: '微信客户移交'
      },
      {
        code: 'nav-sidebar.huan-ying-cv-download',
        state: 'marketing.huan-ying-cv-download',
        name: '环球投递下载'
      },
      {
        code: 'nav-sidebar.university-company-manage',
        state: 'marketing.university-company-manage',
        name: '环球公司管理'
      },
      {
        code: 'marketing.send-sms',
        state: 'marketing.sms.send',
        name: '海外短信通知'
      },
      {
        code: 'marketing.official-account-qrcode',
        state: 'marketing.official-account-qrcode',
        name: '公众号关注场景管理'
      }
    ]
  },
  opportunity: {
    nav: {
      code: 'nav-sidebar.opportunity-manage',
      name: '机会 & 申请',
      svg: '#icon-qiuzhiganhuo'
    },
    subNavs: [
      {
        code: 'nav-sidebar.external-opportunity-manage',
        state: 'opportunities.external.list',
        name: '外部机会'
      },
      {
        code: 'nav-sidebar.referral-opportunity-manage',
        state: 'opportunities.referral.list',
        name: '内推管理'
      },
      {
        code: 'nav-sidebar.crawler-manage',
        state: 'opportunities.crawler.channels',
        name: '爬虫规则'
      },
      {
        code: 'nav-sidebar.crawled-opportunity-manage',
        state: 'opportunities.crawler.opportunities',
        name: '爬得机会'
      },
      {
        code: 'nav-sidebar.crawled-opportunity-review',
        state: 'opportunities.crawler.opportunity-review',
        name: '发布审核'
      }
    ]
  },
  student: {
    nav: {
      code: 'nav-sidebar.student-manage',
      name: '学员管理',
      svg: '#icon-xueyuanguanli'
    },
    subNavs: [
      {
        code: 'nav-sidebar.student-list',
        state: 'student.list',
        name: '学员列表'
      },
      {
        code: 'nav-sidebar.student-source',
        state: 'student.source',
        name: '渠道学员'
      },
      {
        code: 'nav-sidebar.offer-report',
        state: 'student.offer-report',
        name: 'Offer库'
      },
      {
        code: 'nav-sidebar.student-handover',
        state: 'student.handovers',
        name: '学员交接'
      },
      {
        code: 'nav-sidebar.private-schedule',
        state: 'student.private-schedule',
        name: '一对一申请'
      }
    ]
  },
  tutor: {
    nav: {
      code: 'nav-sidebar.tutor-manage',
      name: '导师管理',
      svg: '#icon-daoshiguanli'
    },
    subNavs: [
      {
        code: 'nav-sidebar.tutor-list',
        state: 'tutor.list',
        name: '基本信息'
      },
      {
        code: 'nav-sidebar.tutor-timetable',
        state: 'tutor.timetable',
        name: '授课时间收集'
      },
      {
        code: 'nav-sidebar.tutor-monthly-report',
        state: 'tutor.monthly-report',
        name: '导师月报'
      }
    ]
  }
});
