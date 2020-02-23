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

Project.create!(title: 'General operations', owner_id: 1, team_id: 1, description: 'done')
Project.create!(title: 'Projects MVP', owner_id: 1, team_id: 1, description: 'asfafafldj')
Project.create!(title: 'Human resources', owner_id: 1, team_id: 1, description: 'asfafafldj')
Project.create!(title: 'Marketing campaign', owner_id: 1, team_id: 1, description: 'asfafafldj')
Project.create!(title: 'Bdev', owner_id: 1, team_id: 1, description: 'asfafafldj')

ProjectMembership.create!(member_id: 1, project_id: 1)
ProjectMembership.create!(member_id: 1, project_id: 2)
ProjectMembership.create!(member_id: 1, project_id: 3)
ProjectMembership.create!(member_id: 1, project_id: 4)

ProjectFavorite.create!(user_id: 1, project_id: 1)
ProjectFavorite.create!(user_id: 1, project_id: 2)
ProjectFavorite.create!(user_id: 1, project_id: 3)

Section.create!(project_id: 1, title: 'Planning')
Section.create!(project_id: 1, title: 'Milestones')
Section.create!(project_id: 1, title: 'Next steps')
Section.create!(project_id: 1, title: 'Backlogged ideas')
Section.create!(project_id: 2, title: 'Planning')
Section.create!(project_id: 2, title: 'Milestones')
Section.create!(project_id: 2, title: 'Next steps')
Section.create!(project_id: 2, title: 'Backlogged ideas')

Task.create!(title: 'Upcoming features in design phase', section_id: 1)
Task.create!(title: 'Update action logging', section_id: 1)
Task.create!(title: "Feedback on last Friday's design team presentation", section_id: 1)
Task.create!(title: 'Plan design team offsite', section_id: 1)
Task.create!(title: 'Team calendar refresh', section_id: 1)
Task.create!(title: 'Finalize monthly staffing plan and share with team', section_id: 1)
Task.create!(title: 'Review Q2 launch video outlines', section_id: 2)
Task.create!(title: 'Interview customers to have them tell their stories on the blog', section_id: 2)
Task.create!(title: 'Redesign ideas for gallery page', section_id: 2)
Task.create!(title: 'Prepare swag to give out at conference', section_id: 2)
Task.create!(title: 'Mobile-specific academy courses', section_id: 3)
Task.create!(title: 'Update action logging', section_id: 3)
Task.create!(title: 'Should we highlight training material in the app to help users who are confused?', section_id: 3)
Task.create!(title: 'Performance improvement scoping', section_id: 2)
Task.create!(title: 'Navigation updates', section_id: 3)
Task.create!(title: 'New headline for blog', section_id: 3)
Task.create!(title: 'Evaluate feature success and share with team', section_id: 4)
Task.create!(title: 'Break down spec and cost each story', section_id: 4)
Task.create!(title: 'User auth MVP', section_id: 4)
