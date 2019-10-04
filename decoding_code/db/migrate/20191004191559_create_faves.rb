class CreateFaves < ActiveRecord::Migration[6.0]
  def change
    create_table :faves do |t|
      t.references :user, foreign_key: true
      t.references :deck, foreign_key: true

      t.timestamps
    end
  end
end
