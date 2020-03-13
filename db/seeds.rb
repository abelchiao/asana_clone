# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Team.delete_all
Project.delete_all
ProjectMembership.delete_all
ProjectFavorite.delete_all
Section.delete_all
Task.delete_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('teams')
ApplicationRecord.connection.reset_pk_sequence!('projects')
ApplicationRecord.connection.reset_pk_sequence!('project_memberships')
ApplicationRecord.connection.reset_pk_sequence!('sections')
ApplicationRecord.connection.reset_pk_sequence!('tasks')

User.create!(first_name: 'Demo', last_name: 'User', email: 'demo@demo.demo', password: '123456')

Team.create!(title: 'Engineering', description: 'sajflkajflkjsa')

Project.create!(title: 'Demo project', owner_id: 1, team_id: 1, description: 'demo', section_order: [1, 2, 3, 4, 5, 6])
Project.create!(title: 'General operations', owner_id: 1, team_id: 1, description: 'done', section_order: [7, 8, 9, 10])
Project.create!(title: 'Projects MVP', owner_id: 1, team_id: 1, description: 'asfafafldj', section_order: [11, 12, 13, 14])
Project.create!(title: 'Human resources', owner_id: 1, team_id: 1, description: 'asfafafldj')
Project.create!(title: 'Marketing campaign', owner_id: 1, team_id: 1, description: 'asfafafldj')
Project.create!(title: 'Bdev', owner_id: 1, team_id: 1, description: 'asfafafldj')

ProjectMembership.create!(member_id: 1, project_id: 1)
ProjectMembership.create!(member_id: 1, project_id: 2)
ProjectMembership.create!(member_id: 1, project_id: 3)
ProjectMembership.create!(member_id: 1, project_id: 4)
ProjectMembership.create!(member_id: 1, project_id: 5)
ProjectMembership.create!(member_id: 1, project_id: 6)

ProjectFavorite.create!(user_id: 1, project_id: 1)
ProjectFavorite.create!(user_id: 1, project_id: 2)
ProjectFavorite.create!(user_id: 1, project_id: 3)

Section.create!(project_id: 1, title: 'Backlog', task_order: [1])
Section.create!(project_id: 1, title: 'Up Next', task_order: [2, 3])
Section.create!(project_id: 1, title: 'In Progress', task_order: [4])
Section.create!(project_id: 1, title: 'On Hold')
Section.create!(project_id: 1, title: 'Done', task_order: [5])
Section.create!(project_id: 1, title: 'Questions')
Section.create!(project_id: 2, title: 'Planning', task_order: [6, 7, 8, 9, 10, 11])
Section.create!(project_id: 2, title: 'Milestones', task_order: [12, 13, 14, 15, 16])
Section.create!(project_id: 2, title: 'Next steps', task_order: [17, 18, 19, 20, 21])
Section.create!(project_id: 2, title: 'Backlogged ideas', task_order: [22, 23, 24])
Section.create!(project_id: 3, title: 'Planning')
Section.create!(project_id: 3, title: 'Milestones')
Section.create!(project_id: 3, title: 'Next steps')
Section.create!(project_id: 3, title: 'Backlogged ideas')

Task.create!(title: 'Click on column titles to re-name them', section_id: 1)
Task.create!(title: 'Rearrange sections by clicking/dragging their titles', section_id: 2)
Task.create!(title: 'Drag tasks to re-order them within columns or move them to a new column', section_id: 2)
Task.create!(title: 'Populate columns with new tasks by clicking on the \'+\' icon', section_id: 3)
Task.create!(title: 'Add new columns by clicking on \'+ Add Column\'', section_id: 5)
Task.create!(title: 'Upcoming features in design phase', section_id: 7)
Task.create!(title: 'Update action logging', section_id: 7)
Task.create!(title: "Feedback on last Friday's design team presentation", section_id: 7)
Task.create!(title: 'Plan design team offsite', section_id: 7)
Task.create!(title: 'Team calendar refresh', section_id: 7)
Task.create!(title: 'Finalize monthly staffing plan and share with team', section_id: 7)
Task.create!(title: 'Review Q2 launch video outlines', section_id: 8)
Task.create!(title: 'Interview customers to have them tell their stories on the blog', section_id: 8)
Task.create!(title: 'Redesign ideas for gallery page', section_id: 8)
Task.create!(title: 'Prepare swag to give out at conference', section_id: 8)
Task.create!(title: 'Mobile-specific academy courses', section_id: 8)
Task.create!(title: 'Update action logging', section_id: 9)
Task.create!(title: 'Should we highlight training material in the app to help users who are confused?', section_id: 9)
Task.create!(title: 'Performance improvement scoping', section_id: 9)
Task.create!(title: 'Navigation updates', section_id: 9)
Task.create!(title: 'New headline for blog', section_id: 9)
Task.create!(title: 'Evaluate feature success and share with team', section_id: 10)
Task.create!(title: 'Break down spec and cost each story', section_id: 10)
Task.create!(title: 'User auth MVP', section_id: 10)
