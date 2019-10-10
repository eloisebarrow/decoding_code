class ChangeColumn < ActiveRecord::Migration[6.0]
  def change
    
    change_column_null :cards, :prompt, false
    change_column_null :cards, :answer, false
  end
end
