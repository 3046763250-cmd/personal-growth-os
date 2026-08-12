# 数据维护指南

| 想修改 | 文件 | 字段 |
|---|---|---|
| 姓名、格言、更新时间、联系方式 | `src/data/profile.json` | 对应字段 |
| 考研/学习总时长与目标 | `src/data/growth.json` | `study.total` / `study.goal` |
| 每周学习趋势 | `src/data/growth.json` | `study.weekly` |
| 体重 | `src/data/growth.json` | `fitness.weight` |
| 新增健身训练 | `src/data/growth.json` | `fitness.workouts` |
| 新增篮球训练 | `src/data/growth.json` | `basketball.sessions` / `hours` |
| 新增项目 | `src/data/projects.json` | 在数组末尾追加对象 |

规则：日期使用 `YYYY-MM-DD`；数字不要带单位；未核实信息写 `TODO`；示例数据必须保留 `Example data` 标记。
