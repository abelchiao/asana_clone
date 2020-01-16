# == Schema Information
#
# Table name: project_sections
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  project_id :integer          not null
#
# Indexes
#
#  index_project_sections_on_project_id_and_title  (project_id,title) UNIQUE
#

require 'test_helper'

class ProjectSectionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
