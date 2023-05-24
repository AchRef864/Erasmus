from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
from datetime import date


app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="erasmusbd"
)

cursor = db.cursor()

current_date = date.today()

@app.route('/projects', methods=['GET'])
def get_all_projects():
    cursor.execute('SELECT * FROM projects')
    items = cursor.fetchall()
    projects = []
    for item in items:
        project = {
            'project_id': item[0],
            'title': item[1],
            'type': item[2],
            'content': item[3][:255]  # Truncate content to 255 characters
        }
        projects.append(project)
    return jsonify(projects)


@app.route('/ka1', methods=['GET'])
def get_ka1_projects():
    cursor.execute('SELECT * FROM projects WHERE type="ka1"')
    items = cursor.fetchall()
    projects = []
    for item in items:
        project = {
            'project_id': item[0],
            'title': item[1],
            'type': item[2],
            'content': item[3][:255]  # Truncate content to 255 characters
        }
        projects.append(project)
    return jsonify(projects)


@app.route('/cbhe', methods=['GET'])
def get_cbhe_projects():
    cursor.execute('SELECT * FROM projects WHERE type="cbhe"')
    items = cursor.fetchall()
    projects = []
    for item in items:
        project = {
            'project_id': item[0],
            'title': item[1],
            'type': item[2],
            'content': item[3][:255]  # Truncate content to 255 characters
        }
        projects.append(project)
    return jsonify(projects)

@app.route('/student', methods=['GET'])
def get_all_students():
    cursor.execute('SELECT * FROM student')
    students_data = cursor.fetchall()
    students = []
    for item in students_data:
        student = {
            'student_id': item[0],
            'fname': item[1],
            'lname': item[2],
        }
        students.append(student)
    return jsonify(students)

@app.route('/student/<string:studentId>', methods=['GET'])
def get_student_data(studentId):
    cursor.execute('SELECT * FROM student WHERE student_id=%s', (studentId,))
    student_data = cursor.fetchone()
    if student_data:
        student = {
            'student_id': student_data[0],
            'fname': student_data[1],
            'lname': student_data[2],
        }
        return jsonify(student)
    else:
        return jsonify({'error': 'Student not found'})

@app.route('/staff', methods=['GET'])
def get_all_staff():
    cursor.execute('SELECT * FROM staff')
    staff_data = cursor.fetchall()
    staff_members = []
    for item in staff_data:
        staff = {
            'staff_id': item[0],
            'fname': item[1],
            'lname': item[2],
            'position': item[3],
            'image': item[4]
        }
        staff_members.append(staff)
    return jsonify(staff_members)

@app.route('/annonces', methods=['GET'])
def get_all_annonce():
    cursor.execute('SELECT * FROM announcements')
    annoce_data = cursor.fetchall()
    annonces = []
    for item in annoce_data:
        annonce = {
            'annonce_id': item[0],
            'title': item[1],
            'content': item[2],
            'release_date': item[3]
        }
        annonces.append(annonce)
    return jsonify(annonces)

@app.route('/events', methods=['GET'])
def get_all_events():
    cursor.execute('SELECT * FROM events WHERE date_limit >= %s', (current_date,))
    items = cursor.fetchall()
    events = []
    for item in items:
        event = {
            'event_id': item[0],
            'title': item[1],
            'info': item[2][:255],
            'date_limit': item[3]  # Truncate content to 255 characters
        }
        events.append(event)
    return jsonify(events)

@app.route('/participants/<int:event_Id>', methods=['GET'])
def get_all_participants(event_Id):
    cursor.execute('SELECT fname,lname FROM students join participate using(student_id) where event_id=%s', (event_Id,))
    items = cursor.fetchall()
    participants = []
    for item in items:
        participant = {
            'fname': item[0],
            'lname': item[1]
        }
        participants.append(participant)
    return jsonify(participants)

@app.route('/participants/<int:event_Id>/<int:student_Id>', methods=['POST'])
def adding_participant(event_Id, student_Id):
    cursor.execute('INSERT INTO participate (student_id, event_id) VALUES (%s, %s)', (student_Id, event_Id,))
    db.commit()

@app.route('/students/<int:student_Id>', methods=['POST'])
def adding_student(student_Id,fname,lname):
    cursor.execute('INSERT INTO students (student_id, fname, lname) VALUES (%s, %s)', (student_Id, fname, lname,))
    db.commit()

if __name__ == '__main__':
    app.run()
