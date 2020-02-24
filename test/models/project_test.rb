# == Schema Information
#
# Table name: projects
#
#  id            :bigint           not null, primary key
#  description   :text             default(""), not null
#  due_date      :date
#  section_order :integer          default([]), is an Array
#  title         :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  owner_id      :integer          not null
#  team_id       :integer          not null
#
# Indexes
#
#  index_projects_on_owner_id  (owner_id)
#  index_projects_on_team_id   (team_id)
#  index_projects_on_title     (title) UNIQUE
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
